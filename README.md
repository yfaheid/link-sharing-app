# Devlinks

A link-sharing app that lets you build a personal profile of links to your social and dev profiles, then share it with a single public URL — similar to Linktree. Built with React, Tailwind CSS, and Firebase.

**Live site:** https://devlinks-yfaheid.netlify.app/

## Screenshot

![](./src/assets/link-sharing-app-screenshot.jpg)

## Features

- Email/password authentication (create account, log in, stay logged in)
- Add, edit, remove, and drag-and-drop reorder links across 14 supported platforms (GitHub, LinkedIn, YouTube, Twitter, and more)
- Client-side validation for empty fields and platform-specific URL patterns
- Upload a profile picture, name, and email as part of your public profile
- Live mobile-mockup preview of your profile as you edit it
- Every user's links and profile are private to their account — copy a public share link to let anyone view your profile without needing to log in
- Fully responsive layout across mobile, tablet, and desktop

## Built with

- React
- React Router
- Tailwind CSS
- Firebase (Authentication, Firestore, Storage)
- Vite
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) for drag-and-drop reordering

## Getting started

```bash
npm install
npm run dev
```

You'll need a Firebase project of your own with Authentication (email/password), Firestore, and Storage enabled, plus a matching config in `src/firebase.js`. Security rules for Firestore and Storage are included in `firestore.rules` and `storage.rules`.

## Author

- [@yfaheid](https://github.com/yfaheid)
