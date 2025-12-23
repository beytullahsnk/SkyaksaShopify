#!/bin/bash
# Script d'installation pour OVH/Plesk avec nodenv
# Usage: ./install.sh

set -e  # Arrêter en cas d'erreur

echo "🚀 Initialisation de nodenv..."
export PATH="$HOME/.nodenv/bin:$PATH"

# Initialiser nodenv si disponible
if command -v nodenv &> /dev/null; then
    eval "$(nodenv init -)"
    echo "✅ nodenv initialisé"
else
    echo "⚠️  nodenv non trouvé, utilisation de Node.js système"
fi

# Définir la version Node.js (si nodenv est disponible)
if command -v nodenv &> /dev/null; then
    nodenv local 22 2>/dev/null || nodenv global 22 2>/dev/null || echo "⚠️  Impossible de définir la version nodenv"
fi

# Vérifier Node.js
echo "📦 Vérification de Node.js..."
node --version
npm --version

# Installer les dépendances
echo "📥 Installation des dépendances..."
npm install --production

echo "✅ Installation terminée !"

