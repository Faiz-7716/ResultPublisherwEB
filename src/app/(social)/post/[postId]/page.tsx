import Navbar from "@/components/layout/Navbar";
import PostCard from "@/components/feed/PostCard";
import Link from "next/link";

export default function PostDetailPage({ params }: { params: { postId: string } }) {
  // Mock fetching the specific post
  const mainPost = {
    id: params.postId,
    type: "COMPLAINT" as const,
    author: { name: "Ravi Kumar", handle: "@ravi_k", initials: "R", color: "bg-blue-100 text-blue-600", isVerified: false },
    timeAgo: "2 hours ago",
    location: "Chennai, TN",
    title: "Streetlights not working on OMR",
    description: "The streetlights between Sholinganallur and Siruseri have been off for the last 3 days. It is extremely dangerous for two-wheelers at night due to the heavy lorry traffic. We have complained to the local ward councilor but no action has been taken yet. This area is prone to accidents.\n\nCould the corporation please look into this immediately?",
    stats: { upvotes: 245, comments: 42 }
  };

  const comments = [
    {
      id: "c1",
      author: { name: "Chennai Corporation", handle: "@chennaicorp", initials: "C", color: "bg-slate-800 text-white", isVerified: true },
      timeAgo: "1 hour ago",
      content: "We have registered your complaint. A team has been dispatched to check the transformer issues in the Sholinganallur zone.",
      likes: 85,
      replies: 2
    },
    {
      id: "c2",
      author: { name: "Suresh", handle: "@suresh_007", initials: "S", color: "bg-green-100 text-green-600" },
      timeAgo: "30 mins ago",
      content: "Thank you for raising this. I almost had an accident there yesterday.",
      likes: 12,
      replies: 0
    }
  ];

  return (
    <>
      <div className="mx-auto max-w-2xl w-full px-4 py-6">
          
          {/* Back Button */}
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-bold mb-6 transition-colors w-fit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Back to Feed
          </Link>

          {/* The Main Post */}
          <div className="mb-8">
             <PostCard post={mainPost} />
          </div>

          {/* Comments Section */}
          <div className="bg-background rounded-2xl shadow-sm border border-muted p-6 mb-24">
             <h3 className="font-black text-xl mb-6 flex items-center gap-2">
               Comments
               <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">{mainPost.stats.comments}</span>
             </h3>

             <div className="space-y-6">
               {comments.map(comment => (
                 <div key={comment.id} className="flex gap-4">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 ${comment.author.color}`}>
                     {comment.author.initials}
                   </div>
                   <div className="flex-1">
                      <div className="bg-muted/30 rounded-2xl p-4">
                         <div className="flex items-center gap-1 mb-1">
                           <h4 className="font-bold text-sm">{comment.author.name}</h4>
                           {comment.author.isVerified && <svg width="14" height="14" viewBox="0 0 24 24" fill="#3b82f6" stroke="white" strokeWidth="2"><polygon points="12 2 15.09 5.09 19.5 5.5 19.91 9.91 23 12 19.91 14.09 19.5 18.5 15.09 18.91 12 22 8.91 18.91 4.5 18.5 4.09 14.09 1 12 4.09 9.91 4.5 5.5 8.91 5.09 12 2"></polygon></svg>}
                           <span className="text-xs text-muted-foreground ml-auto">{comment.timeAgo}</span>
                         </div>
                         <p className="text-sm leading-relaxed">{comment.content}</p>
                      </div>
                      <div className="flex items-center gap-6 mt-2 ml-4">
                         <button className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
                           Like • {comment.likes}
                         </button>
                         <button className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors">
                           Reply {comment.replies > 0 ? `(${comment.replies})` : ''}
                         </button>
                      </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>

      </div>

      {/* Sticky Comment Input */}
      <div className="fixed bottom-0 md:bottom-0 left-0 right-0 bg-background border-t border-muted p-4 pb-safe z-40">
         <div className="mx-auto max-w-2xl flex gap-3">
            <input 
              type="text" 
              placeholder="Post a comment..." 
              className="flex-1 bg-muted/50 border border-muted focus:border-primary focus:bg-background rounded-full px-5 py-3 text-sm font-medium outline-none transition-all"
            />
            <button className="bg-primary text-white font-black px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
              Reply
            </button>
         </div>
      </div>
    </>
  );
}
