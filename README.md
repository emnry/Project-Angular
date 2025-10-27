# 📰 Projet Angular — Articles

Ce projet **Angular** a pour objectif de présenter et gérer des articles (affichage, création, modification, suppression, etc.).

---

## 🔧 Installation et démarrage du Front-End

### 1. Prérequis

Avant de commencer, assurez-vous d’avoir installé sur votre machine :

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/) (installé avec Node.js)
* [Angular CLI](https://angular.io/cli) :

```bash
npm install -g @angular/cli
```

---

### 2. Cloner le projet

```bash
git clone https://github.com/emnry/Projet-Angular.git
```

---

### 3. Installer les dépendances

```bash
npm install
```

---

### 4. Lancer le Front-End

```bash
npm start
```

Ensuite, ouvrez votre navigateur sur :
[http://localhost:4200](http://localhost:4200)

---

## 🏗️ Structure du projet

```
angular-project/
 ├── src/
 │   ├── app/
 │   │   ├── components/   # Composants Angular (Footer)
 │   │   ├── services/     # Services (Articles, Authentification, Connexion API)
 │   │   ├── classes/      # Classes (User, Article)
 │   │   ├── guards/       # Gestion de la connexion utilisateur
 │   │   ├── pages/        # Pages principales (Articles, Login, Article, etc.)
 │   │   └── app.ts        # Module principal
 │   └── index.html        # Entrée principale
 ├── angular.json
 ├── package.json
 └── README.md
```

---

## ⚙️ Installation et démarrage de l’API

### 1. Cloner le dépôt de l’API

```bash
git clone https://github.com/Chocolaterie/ApiArticle.git
```

---

### 2. Installer les dépendances

```bash
npm install
```

---

### 3. Lancer l’API

```bash
npm start
```

Le serveur sera disponible sur :
[http://localhost:3000](http://localhost:3000)

---

## 🌐 Fonctionnalités principales de l’API

L’API **mockée** simule un backend simple avec des données en mémoire (aucune base de données nécessaire).
Elle permet de **tester les appels HTTP** du projet Angular pour les utilisateurs et les articles.

---

### 🔐 Gestion des utilisateurs

Comptes mock disponibles :

```
isaac@gmail.com | password
tata@gmail.com  | 123456
toto@gmail.com  | 12345
```

---

## 🧩 Fonctionnalités principales

### 👥 Utilisateurs

* Authentification via l’API (connexion / inscription).
* Token de connexion stocké dans le `localStorage`.
* Accès restreint à certaines pages grâce à `authGuard`.
* Déconnexion disponible depuis le **footer**.
* Redirection automatique vers `/login` en cas d’accès non autorisé.

---

### 📰 Articles

* Affichage de la **liste des articles** (titre + image) sur la page `/articles` (accessible à tous).
* Consultation **d’un article unique** via `/article/:id` (titre, image, description, auteur).
* Création, modification et suppression d’articles (réservées aux utilisateurs connectés).
* Tous les utilisateurs connectés peuvent gérer l’ensemble des articles du site.
* Validation de formulaire : tous les champs obligatoires sauf l’image lors de la création.

---

### ⚙️ Gestion & outils

* Page `/manage` dédiée à la **gestion globale des articles** (édition, suppression).
* Bouton **Import** dans le footer : ajout automatique d’articles de test dans l’API.
* L’API mockée est **réinitialisée à chaque redémarrage**.
* Navigation via un **footer** unique :

  * 🔑 Login / Logout
  * 🏠 Home → `/articles`
  * ✍️ Write an article → `/create`
  * 📥 Import → ajout automatique d’articles
  * ⚙️ Gestion → `/manage`

---

### 💡 Autres caractéristiques

* Application **responsive**, adaptée aux écrans mobiles.
* Interface simple et claire centrée sur la gestion et la consultation d’articles.
* Aucune distinction de rôle (tous les utilisateurs connectés ont les mêmes permissions).

---

## 👤 Auteur

© 2025 – **Ethan MENOURY**

