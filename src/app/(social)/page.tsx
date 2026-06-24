"use client";

import { useState } from "react";
import RightSidebar from "@/components/feed/RightSidebar";
import PostCard from "@/components/feed/PostCard";
import CreatePostModal from "@/components/feed/CreatePostModal";

export default function HomeFeedPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [modalDefaultType, setModalDefaultType] = useState<"UPDATE" | "COMPLAINT" | "POLL">("UPDATE");

  const openCreateModal = (type: "UPDATE" | "COMPLAINT" | "POLL") => {
    setModalDefaultType(type);
    setIsCreateModalOpen(true);
  };
  const posts = [
    {
      id: "post_1",
      type: "COMPLAINT" as const,
      author: { name: "Ravi Kumar", handle: "@ravi_k", initials: "R", color: "bg-blue-100 text-blue-600", isVerified: false },
      timeAgo: "2 hours ago",
      location: "Chennai, TN",
      title: "Streetlights not working on OMR",
      description: "The streetlights between Sholinganallur and Siruseri have been off for the last 3 days. It is extremely dangerous for two-wheelers at night due to the heavy lorry traffic.",
      stats: { upvotes: 245, comments: 42 }
    },
    {
      id: "post_2",
      type: "POLL" as const,
      author: { name: "Maha Krishnan", handle: "@maha_k", initials: "M", color: "bg-purple-100 text-purple-600", isVerified: true },
      timeAgo: "5 hours ago",
      location: "Coimbatore, TN",
      title: "Should the city corporation mandate rainwater harvesting in all commercial buildings?",
      pollOptions: [
        { label: "Yes, absolutely", percentage: 85, isWinner: true },
        { label: "No, let it be voluntary", percentage: 15, isWinner: false }
      ],
      stats: { upvotes: 1402, comments: 128 }
    },
    {
      id: "post_3",
      type: "DISCUSSION" as const,
      author: { name: "Anna University", handle: "@anna_univ", initials: "A", color: "bg-emerald-100 text-emerald-600", isVerified: true },
      timeAgo: "1 day ago",
      title: "Semester 8 Results for B.E/B.Tech have been published.",
      description: "All students are requested to check the Results Hub. Any discrepancies in the internal marks must be reported to the respective HoDs by Friday.",
      stats: { upvotes: 3400, comments: 850 }
    }
  ];

  return (
    <div className="flex lg:gap-12 w-full">
      
      {/* Center Feed */}
      <div className="flex-1 max-w-4xl min-w-0">
          
          {/* Live Events (Story Balls) */}
          <div className="flex gap-4 overflow-x-auto pb-4 mb-2 hide-scrollbar items-center">
            {[
              { id: 1, name: "TNPSC", initials: "TN", color: "bg-emerald-100 text-emerald-600", active: true, label: "Live Exam" },
              { id: 2, name: "Anna Univ", initials: "AU", color: "bg-blue-100 text-blue-600", active: true, label: "Results" },
              { id: 3, name: "UPSC", initials: "UP", color: "bg-orange-100 text-orange-600", active: true, label: "Notice" },
              { id: 4, name: "IPL", initials: "CSK", color: "bg-yellow-100 text-yellow-700", active: true, label: "Match" },
              { id: 5, name: "Tech News", initials: "TC", color: "bg-purple-100 text-purple-600", active: false, label: "Update" },
              { id: 6, name: "Supreme Ct", initials: "SC", color: "bg-slate-100 text-slate-600", active: false, label: "Verdict" },
              { id: 7, name: "Election", initials: "EC", color: "bg-red-100 text-red-600", active: false, label: "Counting" },
              { id: 8, name: "Railway", initials: "RRB", color: "bg-sky-100 text-sky-600", active: false, label: "Admit Card" },
            ].map(story => (
              <div key={story.id} className="flex flex-col items-center gap-1.5 cursor-pointer shrink-0 transition-transform hover:scale-105 active:scale-95">
                <div className={`rounded-full p-[3px] ${story.active ? 'bg-gradient-to-tr from-primary via-secondary to-accent' : 'bg-muted'}`}>
                  <div className={`w-14 h-14 rounded-full border-[3px] border-background flex items-center justify-center font-black text-lg ${story.color}`}>
                    {story.initials}
                  </div>
                </div>
                <span className="text-[11px] font-bold text-foreground/80 truncate max-w-[64px] text-center">{story.label}</span>
              </div>
            ))}
          </div>
          {/* Create Post Input */}
          <div className="bg-background rounded-2xl shadow-sm border border-muted p-4 mb-6">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">
                A
              </div>
              <div 
                onClick={() => openCreateModal("UPDATE")}
                className="flex-1 bg-muted/50 rounded-full px-4 py-3 cursor-text hover:bg-muted transition-colors"
              >
                 <span className="text-muted-foreground font-medium text-sm">Post a complaint, poll, or discussion...</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4 ml-14 border-t border-muted/50 pt-3">
               <button 
                 onClick={() => openCreateModal("COMPLAINT")}
                 className="flex items-center gap-2 text-primary font-semibold text-sm hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors"
               >
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                 Complaint
               </button>
               <button 
                 onClick={() => openCreateModal("POLL")}
                 className="flex items-center gap-2 text-accent font-semibold text-sm hover:bg-accent/5 px-3 py-1.5 rounded-lg transition-colors"
               >
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                 Poll
               </button>
            </div>
          </div>

          {/* Feed Posts */}
          <div className="space-y-4 mb-12">
            {posts.map(post => (
               <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
      <RightSidebar />

      <CreatePostModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
        defaultType={modalDefaultType} 
      />
    </div>
  );
}
