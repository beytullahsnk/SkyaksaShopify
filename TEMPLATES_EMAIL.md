# 📧 Templates Email EmailJS - Skyaksa

Templates HTML prêts à copier-coller dans EmailJS, adaptés au design Skyaksa.

---

## 🎨 Template 1 : Formulaire de Contact

**Nom dans EmailJS :** `Contact Form - Skyaksa`  
**Template ID :** À noter après création

### Configuration EmailJS :
- **To Email :** `contact@skyaksa.com` (ou ton email)
- **From Name :** `Skyaksa Contact Form`
- **Subject :** `Nouvelle demande de contact - {{from_name}}`

### Code HTML à coller :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  
  <!-- Container principal -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        
        <!-- Carte email -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 600px;">
          
          <!-- Header avec gradient violet -->
          <tr>
            <td style="background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                ✉️ Nouvelle demande de contact
              </h1>
              <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
                Skyaksa - Agence Shopify
              </p>
            </td>
          </tr>
          
          <!-- Contenu -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Message d'introduction -->
              <p style="margin: 0 0 30px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Bonjour,<br><br>
                Vous avez reçu une nouvelle demande de contact depuis votre site web.
              </p>
              
              <!-- Informations du contact -->
              <div style="background-color: #f9fafb; border-left: 4px solid #8B5CF6; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 20px 0; color: #111827; font-size: 20px; font-weight: 600;">
                  👤 Informations du contact
                </h2>
                
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 140px; vertical-align: top;">
                      <strong>Nom complet :</strong>
                    </td>
                    <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">
                      {{from_name}}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">
                      <strong>Email :</strong>
                    </td>
                    <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">
                      <a href="mailto:{{from_email}}" style="color: #8B5CF6; text-decoration: none;">{{from_email}}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">
                      <strong>Téléphone :</strong>
                    </td>
                    <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">
                      {{phone}}
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Détails du projet -->
              <div style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 20px 0; color: #111827; font-size: 20px; font-weight: 600;">
                  🚀 Détails du projet
                </h2>
                
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 140px; vertical-align: top;">
                      <strong>Site web existant :</strong>
                    </td>
                    <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">
                      {{has_website}}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">
                      <strong>URL du site :</strong>
                    </td>
                    <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">
                      {{#website_url}}{{website_url}}{{/website_url}}{{^website_url}}N/A{{/website_url}}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">
                      <strong>Type de projet :</strong>
                    </td>
                    <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">
                      {{project_type}}
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Message -->
              <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 24px; border-radius: 8px; margin-bottom: 30px;">
                <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 20px; font-weight: 600;">
                  💬 Message
                </h2>
                <p style="margin: 0; color: #111827; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">
{{message}}
                </p>
              </div>
              
              <!-- Bouton CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="mailto:{{from_email}}?subject=Re: Votre demande de contact - Skyaksa" style="display: inline-block; background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px rgba(139, 92, 246, 0.3);">
                      ✉️ Répondre par email
                    </a>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px;">
                Ce message a été envoyé depuis le formulaire de contact de
              </p>
              <p style="margin: 0; color: #8B5CF6; font-size: 14px; font-weight: 600;">
                skyaksa.com
              </p>
            </td>
          </tr>
          
        </table>
        
      </td>
    </tr>
  </table>
  
</body>
</html>
```

---

## 📬 Template 2 : Newsletter

**Nom dans EmailJS :** `Newsletter Subscription - Skyaksa`  
**Template ID :** À noter après création

### Configuration EmailJS :
- **To Email :** `contact@skyaksa.com` (ou ton email)
- **From Name :** `Skyaksa Newsletter`
- **Subject :** `Nouvelle inscription newsletter - {{email}}`

### Code HTML à coller :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  
  <!-- Container principal -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        
        <!-- Carte email -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 600px;">
          
          <!-- Header avec gradient vert Shopify -->
          <tr>
            <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                📧 Nouvelle inscription newsletter
              </h1>
              <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
                Skyaksa - Agence Shopify
              </p>
            </td>
          </tr>
          
          <!-- Contenu -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Message d'introduction -->
              <p style="margin: 0 0 30px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Bonjour,<br><br>
                Une nouvelle personne s'est inscrite à votre newsletter.
              </p>
              
              <!-- Informations de l'abonné -->
              <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border: 2px solid #10b981; padding: 32px; border-radius: 12px; margin-bottom: 30px; text-align: center;">
                <div style="font-size: 48px; margin-bottom: 16px;">🎉</div>
                <h2 style="margin: 0 0 20px 0; color: #111827; font-size: 22px; font-weight: 600;">
                  Nouvel abonné
                </h2>
                
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 24px;">
                  <tr>
                    <td style="padding: 12px 0; text-align: left; color: #6b7280; font-size: 14px; width: 50%;">
                      <strong>Email :</strong>
                    </td>
                    <td style="padding: 12px 0; text-align: left; color: #111827; font-size: 15px; font-weight: 600;">
                      <a href="mailto:{{email}}" style="color: #10b981; text-decoration: none;">{{email}}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; text-align: left; color: #6b7280; font-size: 14px;">
                      <strong>Date d'inscription :</strong>
                    </td>
                    <td style="padding: 12px 0; text-align: left; color: #111827; font-size: 15px; font-weight: 500;">
                      {{subscribed_at}}
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Stats (optionnel) -->
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 30px; text-align: center;">
                <p style="margin: 0; color: #6b7280; font-size: 13px; line-height: 1.6;">
                  💡 <strong>Astuce :</strong> N'oubliez pas d'ajouter cet email à votre liste de diffusion principale pour envoyer vos newsletters et guides SEO Shopify.
                </p>
              </div>
              
              <!-- Bouton CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="mailto:{{email}}?subject=Bienvenue dans la newsletter Skyaksa" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3);">
                      ✉️ Envoyer un message de bienvenue
                    </a>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px;">
                Ce message a été envoyé depuis le site
              </p>
              <p style="margin: 0; color: #8B5CF6; font-size: 14px; font-weight: 600;">
                skyaksa.com
              </p>
            </td>
          </tr>
          
        </table>
        
      </td>
    </tr>
  </table>
  
</body>
</html>
```

---

## 📋 Instructions de copie dans EmailJS

1. **Aller dans EmailJS** → **Email Templates**
2. **Créer un nouveau template** ou **éditer un template existant**
3. **Coller le code HTML** dans l'éditeur
4. **Vérifier les variables** :
   - Template Contact : `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{has_website}}`, `{{website_url}}`, `{{project_type}}`, `{{message}}`
   - Template Newsletter : `{{email}}`, `{{subscribed_at}}`
5. **Configurer** :
   - **To Email** : Ton email
   - **From Name** : Nom d'affichage
   - **Subject** : Sujet de l'email
6. **Sauvegarder** et noter le **Template ID**

---

## 🎨 Design adapté

- ✅ **Couleurs Skyaksa** : Violet (`#8B5CF6`) pour le contact
- ✅ **Couleurs Shopify** : Vert (`#10b981`) pour la newsletter
- ✅ **Design moderne** : Bordures arrondies, ombres, gradients
- ✅ **Responsive** : S'adapte aux mobiles
- ✅ **Compatible email** : CSS inline, tables HTML (compatibilité maximale)

---

## ⚠️ Note importante

EmailJS utilise parfois une syntaxe différente pour les conditions. Si `{{#website_url}}` ne fonctionne pas, remplace par :

```html
{{website_url}}
```

Et si le champ est vide, EmailJS affichera simplement rien (ou "N/A" si tu l'as mis en dur).

---

## ✅ C'est prêt !

Copie-colle ces templates dans EmailJS et ils seront automatiquement utilisés par tes formulaires.

