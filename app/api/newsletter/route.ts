import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'newsletter-subscribers.json')

interface Subscriber {
  email: string
  subscribedAt: string
}

async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

async function getSubscribers(): Promise<Subscriber[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveSubscribers(subscribers: Subscriber[]) {
  await ensureDataDir()
  await fs.writeFile(DATA_FILE, JSON.stringify(subscribers, null, 2), 'utf-8')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validation de l'email
    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    const email = body.email.toLowerCase().trim()
    
    // Récupérer les abonnés existants
    const subscribers = await getSubscribers()
    
    // Vérifier si l'email existe déjà
    if (subscribers.some(sub => sub.email === email)) {
      return NextResponse.json(
        { message: 'Vous êtes déjà inscrit à notre newsletter' },
        { status: 200 }
      )
    }

    // Ajouter le nouvel abonné
    subscribers.push({
      email,
      subscribedAt: new Date().toISOString(),
    })

    // Sauvegarder
    await saveSubscribers(subscribers)
    
    console.log(`Nouvel abonné newsletter: ${email}`)

    return NextResponse.json(
      { message: 'Inscription réussie' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'inscription à la newsletter:', error)
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'inscription' },
      { status: 500 }
    )
  }
}

// GET pour récupérer la liste des abonnés (protéger en prod avec auth)
export async function GET() {
  try {
    const subscribers = await getSubscribers()
    return NextResponse.json({
      total: subscribers.length,
      subscribers,
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des abonnés:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}

