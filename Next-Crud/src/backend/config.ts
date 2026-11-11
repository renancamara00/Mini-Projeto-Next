import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Chaves de segurança que você vai pegar no painel do Firebase com o professor
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// 🪄 Garante que o Next não tente reconectar no banco toda hora que a página recarregar
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Esse objeto 'db' é o que você vai usar para fazer o CRUD de verdade!
export const db = getFirestore(app);