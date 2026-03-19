import { useState, useEffect } from 'react';
import { collection, getDocs, query, where, QueryConstraint } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  imageUrl?: string;
  author?: string;
  authorId?: string;
}

export interface UseArticlesFilters {
  categoryId?: string;
  authorId?: string;
}

export function useArticles(filters?: UseArticlesFilters) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const constraints: QueryConstraint[] = [];
        
        if (filters?.categoryId) {
          constraints.push(where('category', '==', filters.categoryId));
        }
        if (filters?.authorId) {
          constraints.push(where('authorId', '==', filters.authorId));
        }

        const q = constraints.length > 0 
          ? query(collection(db, 'articles'), ...constraints)
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
  }, [filters?.categoryId, filters?.authorId]);

  return { articles, loading, error };
}
