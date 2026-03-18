import { initializeApp, getApps } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Reemplaza los valores de este objeto con los de TU consola de Firebase
const firebaseConfig = {

    apiKey: "AIzaSyBCb48cieyFQvn-C6XKcoeV98f6oyF5ujE",

    authDomain: "revista-digital-leo.firebaseapp.com",

    projectId: "revista-digital-leo",

    storageBucket: "revista-digital-leo.firebasestorage.app",

    messagingSenderId: "76463378607",

    appId: "1:76463378607:web:91e5ab36ab240813dec45a"

};

// Inicializar Firebase solo si no hay una instancia previa (evita errores en Next.js)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Inicializar Firestore
const db = getFirestore(app);

// ¡Magia del Emulador! Si estamos desarrollando, apuntamos al emulador local en lugar de la nube
if (process.env.NODE_ENV === 'development') {
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
}

export { db };