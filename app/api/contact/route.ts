import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'contact-submissions.json')

interface ContactSubmission {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  hasWebsite: string
  websiteUrl?: string
  projectType: string
  message: string
  submittedAt: string
  status?: 'new' | 'read' | 'replied'
}

async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

async function getSubmissions(): Promise<ContactSubmission[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveSubmissions(submissions: ContactSubmission[]) {
  await ensureDataDir()
  await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), 'utf-8')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validation des champs requis
    if (!body.firstName || !body.lastName || !body.email || !body.message || !body.projectType) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      )
    }

    // Validation de l'email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    // Récupérer les soumissions existantes
    const submissions = await getSubmissions()
    
    // Créer la nouvelle soumission
    const newSubmission: ContactSubmission = {
      id: `contact-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.toLowerCase().trim(),
      phone: body.phone?.trim() || undefined,
      hasWebsite: body.hasWebsite,
      websiteUrl: body.websiteUrl?.trim() || undefined,
      projectType: body.projectType,
      message: body.message.trim(),
      submittedAt: new Date().toISOString(),
      status: 'new',
    }

    // Ajouter la soumission
    submissions.unshift(newSubmission) // Ajouter au début pour avoir les plus récentes en premier
    
    // Sauvegarder
    await saveSubmissions(submissions)
    
    console.log(`Nouvelle demande de contact: ${newSubmission.firstName} ${newSubmission.lastName} (${newSubmission.email})`)

    return NextResponse.json(
      { message: 'Message envoyé avec succès', id: newSubmission.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error)
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}

// GET pour récupérer les soumissions (protéger en prod avec auth)
export async function GET() {
  try {
    const submissions = await getSubmissions()
    return NextResponse.json({
      total: submissions.length,
      submissions,
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des soumissions:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}

