"use client"; // Le decimos a Next.js que este componente se ejecuta en el navegador (cliente) para poder usar eventos como onClick

import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Home() {
  const handleTestDatabase = async () => {
    try {
      // Intentamos guardar un documento en la colección "categories"
      const docRef = await addDoc(collection(db, "categories"), {
        id: "diseno-ux",
        name: "Diseño UX/UI",
        description: "Explorando interfaces, usabilidad y experiencias digitales."
      });

      console.log("¡Documento escrito con ID: ", docRef.id);
      alert("¡Éxito! Revisa la pestaña de Firestore en tu Emulador local.");
    } catch (e) {
      console.error("Error añadiendo el documento: ", e);
      alert("Hubo un error. Revisa la consola.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-black">
      <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">
        Yorokubu Clone
      </h1>
      <p className="mb-8 font-sans text-gray-600">
        Prueba de conexión con Firebase Emulator
      </p>

      <button
        onClick={handleTestDatabase}
        className="px-6 py-3 bg-black text-white font-sans font-medium rounded hover:bg-gray-800 transition-colors"
      >
        Guardar Categoría de Prueba
      </button>
    </main>
  );
}
