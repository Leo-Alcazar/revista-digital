import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatarUrl?: string;
}

export function useAuthor(id: string) {
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchAuthor() {
      if (!id) return;
      try {
        setLoading(true);
        const docRef = doc(db, 'authors', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setAuthor({ id: docSnap.id, ...docSnap.data() } as Author);
        } else {
          setError(new Error("Autor no encontrado"));
        }
      } catch (err: any) {
        console.error("Error al cargar autor:", err);
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    }

    fetchAuthor();
  }, [id]);

  return { author, loading, error };
}
