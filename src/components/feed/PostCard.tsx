"use client";

import Link from "next/link";

interface PostCardProps {
  id: string;
  type: "COMPLAINT" | "POLL" | "DISCUSSION";
  author: {
    name: string;
    handle: string;
    initials: string;
    color: string;
    isVerified?: boolean;
  };
  timeAgo: string;
  location?: string;
  title: string;
  description?: string;
  pollOptions?: { label: string; percentage: number; isWinner: boolean }[];
  stats: {
    upvotes: number;
    comments: number;
  };
}

export default function PostCard({ post }: { post: PostCardProps }) {
  const typeColors = {
    COMPLAINT: "bg-amber-100 text-amber-800",
    POLL: "bg-primary/10 text-primary",
    DISCUSSION: "bg-blue-100 text-blue-800"
  };

  return (
    <article className="bg-background rounded-2xl shadow-sm border border-muted p-5 hover:border-primary/30 transition-colors cursor-pointer block relative">
      <Link href={`/post/${post.id}`} className="absolute inset-0 z-0" aria-label="View post" />
      
      <div className="relative z-10 flex items-center justify-between mb-4">
         <div className="flex items-center gap-3">
           <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${post.author.color}`}>
             {post.author.initials}
           </div>
           <div>
             <div className="flex items-center gap-1">
               <h4 className="font-bold text-sm">{post.author.name}</h4>
               {post.author.isVerified && <svg width="14" height="14" viewBox="0 0 24 24" fill="#3b82f6" stroke="white" strokeWidth="2"><polygon points="12 2 15.09 5.09 19.5 5.5 19.91 9.91 23 12 19.91 14.09 19.5 18.5 15.09 18.91 12 22 8.91 18.91 4.5 18.5 4.09 14.09 1 12 4.09 9.91 4.5 5.5 8.91 5.09 12 2"></polygon></svg>}
             </div>
             <p className="text-[11px] text-muted-foreground">{post.location ? `${post.location} • ` : ""}{post.timeAgo}</p>
           </div>
         </div>
         <span className={`${typeColors[post.type]} text-[10px] font-bold px-2 py-1 rounded-full tracking-wider`}>
           {post.type}
         </span>
      </div>

      <div className="relative z-10">
        <h3 className="font-black text-[17px] mb-2 leading-tight">{post.title}</h3>
        {post.description && (
          <p className="text-sm text-foreground/80 mb-4 line-clamp-3 leading-relaxed">{post.description}</p>
        )}

        {post.type === "POLL" && post.pollOptions && (
          <div className="space-y-2 mb-4 pointer-events-none">
             {post.pollOptions.map((opt, i) => (
               <div key={i} className={`relative h-10 border rounded-lg overflow-hidden flex items-center px-4 ${opt.isWinner ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-muted/30 border-muted'}`}>
                 <div className={`absolute top-0 left-0 bottom-0 z-0 ${opt.isWinner ? 'bg-primary/20' : 'bg-muted'}`} style={{ width: `${opt.percentage}%` }}></div>
                 <span className="relative z-10 font-bold text-sm">{opt.label}</span>
                 <span className="relative z-10 ml-auto font-bold text-sm">{opt.percentage}%</span>
               </div>
             ))}
          </div>
        )}
      </div>

      <div className="relative z-10 flex items-center gap-6 border-t border-muted/50 pt-3 mt-2">
         <button className="flex items-center gap-1.5 text-muted-foreground hover:text-success transition-colors group">
           <div className="p-1.5 rounded-full group-hover:bg-success/10">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"></polyline></svg>
           </div>
           <span className="font-bold text-sm">{post.stats.upvotes}</span>
         </button>
         
         <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors group">
           <div className="p-1.5 rounded-full group-hover:bg-primary/10">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
           </div>
           <span className="font-bold text-sm">{post.stats.comments}</span>
         </button>

         <button className="flex items-center gap-1.5 text-muted-foreground hover:text-blue-500 transition-colors group">
           <div className="p-1.5 rounded-full group-hover:bg-blue-500/10">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
           </div>
         </button>

         <button className="flex items-center gap-1.5 text-muted-foreground ml-auto hover:text-amber-500 transition-colors group">
           <div className="p-1.5 rounded-full group-hover:bg-amber-500/10">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
           </div>
         </button>
      </div>
    </article>
  );
}
