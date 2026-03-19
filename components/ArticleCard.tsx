import Link from "next/link";
import { Article } from "@/lib/hooks/useArticles";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/article/${article.id}`}>
      <article className="flex flex-col md:flex-row gap-4 md:gap-8 mb-12 md:mb-16 border-b border-editorial-gray pb-8 md:pb-16 hover:opacity-80 transition-opacity cursor-pointer text-black">
        {/* Lado izquierdo */}
        <div className="w-full md:w-1/2 aspect-video bg-gray-100 rounded-md overflow-hidden relative flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={article.imageUrl || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Lado derecho */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-red-600 font-sans text-[10px] font-bold uppercase tracking-widest mb-2">
            {article.category}
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight mb-4 text-black">
            {article.title}
          </h2>
          <div className="text-gray-400 text-[11px] uppercase">
            {article.date} {article.author && `| POR ${article.author}`}
          </div>
          <p className="font-sans text-gray-600 leading-relaxed mt-4">
            {article.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
