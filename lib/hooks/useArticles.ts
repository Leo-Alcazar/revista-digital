import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  imageUrl?: string;
  author?: string;
}

export function useArticles(categoryId?: string) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const q = categoryId 
          ? query(collection(db, 'articles'), where('category', '==', categoryId))
          : query(collection(db, 'articles'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Article[];
        
        setArticles(data);
      } catch (err: any) {
        console.error("Error al cargar artículos de Firestore:", err);
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, [categoryId]);

  return { articles, loading, error };
}
