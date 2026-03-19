import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Article } from './useArticles';

export interface FullArticle extends Article {
  content?: string;
}

export function useArticle(id: string) {
  const [article, setArticle] = useState<FullArticle | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      if (!id) return;
      try {
        setLoading(true);
        const docRef = doc(db, 'articles', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setArticle({ id: docSnap.id, ...docSnap.data() } as FullArticle);
        } else {
          setError(new Error("Artículo no encontrado"));
        }
      } catch (err: any) {
        console.error("Error al cargar artículo individual:", err);
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  return { article, loading, error };
}
