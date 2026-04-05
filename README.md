# TP React Débutant – Formulaires, State Lifting & Contexte

## Objectif

Ce TP t'apprend à :

- Créer des formulaires simples (contrôlés et non-contrôlés)
- Partager des données entre des composants (Lifting State Up)
- Utiliser le contexte React pour gérer des informations globales

---
<img width="1126" height="765" alt="image" src="https://github.com/user-attachments/assets/3e5d0a5c-db7b-462a-92cc-4c2c35aa3fb2" />


## Prérequis

- Node.js et npm installés
- Connaissances de base en JavaScript et React

---

## Structure du projet

```
src/
├── App.css
├── App.js
├── App.test.js
├── CarteUtilisateur.js
├── ChampTemperature.js
├── ConvertisseurTemp.js
├── FormulaireControle.js
├── FormulaireRef.js
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
├── SessionContext.js
└── setupTests.js
```

---

## Étapes

### Étape 1 – Créer le projet React

Ouvre un terminal et crée un nouveau projet React avec `npx create-react-app`, entre dans le dossier, puis démarre le serveur avec `npm start`. Le projet s'ouvre automatiquement dans le navigateur.

---

### Étape 2 – Formulaire contrôlé (`FormulaireControle.js`)

Crée un composant avec deux champs (Nom et Email) reliés au `state` via `useState`. Chaque `input` possède un attribut `value` lié à l'état et un `onChange` qui met à jour cet état à chaque frappe. À la soumission, un `alert` affiche les valeurs saisies.

> **Points clés :** `useState` crée la valeur réactive. `value` affiche l'état actuel. `onChange` le met à jour à chaque frappe.

---

### Étape 3 – Formulaire non-contrôlé (`FormulaireRef.js`)

Crée un composant similaire mais sans `state`. Utilise `useRef` pour créer des références vers les éléments `input`. La valeur est lue directement via `ref.current.value` uniquement au moment de la soumission.

> **Points clés :** `useRef()` crée une référence vers l'élément DOM. La valeur n'est lue qu'à la soumission, pas à chaque frappe.

---

### Étape 4 – Afficher les formulaires dans `App.js`

Importe et affiche les deux composants `FormulaireControle` et `FormulaireNonControle` dans `App.js` sous deux titres distincts.

---

### Étape 5 – Partage d'état parent → enfant (Lifting State Up)

Crée deux composants :

- **`ChampTemperature.js`** (enfant) : un simple `input` numérique qui reçoit la valeur et la fonction de mise à jour via les props.
- **`ConvertisseurTemp.js`** (parent) : contient l'état `celsius` et le transmet à l'enfant. Affiche un message dynamique selon que la valeur est saisie ou non.

> **Points clés :** L'état est centralisé dans le parent. L'enfant ne fait que recevoir et remonter les changements via les props.

---

### Étape 6 – Ajouter le convertisseur dans `App.js`

Importe `ConvertisseurTemp` et ajoute-le dans le rendu de `App.js` sous un titre "Lifting State Up".

---

### Étape 7 – Créer le contexte utilisateur (`SessionContext.js`)

Crée un fichier qui exporte un contexte React via `createContext`. Ce contexte servira à partager les informations de l'utilisateur connecté à travers toute l'application sans passer par les props.

---

### Étape 8 – Fournir et consommer le contexte

**`CarteUtilisateur.js`** : utilise `useContext` pour lire les données de l'utilisateur. Affiche un message de bienvenue si l'utilisateur est connecté, avec un bouton de déconnexion qui remet l'état à vide.

**`App.js`** final : enveloppe toute l'application dans `UtilisateurContext.Provider` en lui passant l'état `utilisateur` et la fonction `setUtilisateur`. Tous les composants enfants peuvent ainsi accéder à ces données sans prop drilling.

> **Points clés :** Le `Provider` rend les données globalement accessibles. `useContext` les consomme depuis n'importe quel composant enfant.

---

## Exercices facultatifs

1. **Formulaire d'inscription** – Ajoute un formulaire avec les champs Nom, Email et Mot de passe.
2. **Conversion Fahrenheit** – Ajoute un second champ synchronisé dans `ConvertisseurTemp` pour afficher la valeur convertie en Fahrenheit.
3. **Reconnexion** – Ajoute un bouton "Se connecter" dans `CarteUtilisateur` pour reconnecter l'utilisateur après déconnexion.

---

## Lancer le projet

```bash
npm start
```

L'application est disponible sur [http://localhost:3000](http://localhost:3000).
