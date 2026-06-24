"use client";

import PostCard from "@/components/feed/PostCard";
import RightSidebar from "@/components/feed/RightSidebar";

export default function BookmarksPage() {
  const bookmarkedPost = {
    id: "post_3",
    type: "DISCUSSION" as const,
    author: { name: "Anna University", handle: "@anna_univ", initials: "A", color: "bg-emerald-100 text-emerald-600", isVerified: true },
    timeAgo: "1 day ago",
    title: "Semester 8 Results for B.E/B.Tech have been published.",
    description: "All students are requested to check the Results Hub. Any discrepancies in the internal marks must be reported to the respective HoDs by Friday.",
    stats: { upvotes: 3400, comments: 850 }
  };

  return (
    <div className="flex lg:gap-12 w-full">
      <div className="flex-1 max-w-2xl min-w-0 border-x border-muted min-h-screen bg-background">
        <div className="sticky top-[88px] lg:top-0 z-10 bg-background/80 backdrop-blur-md border-b border-muted p-4 px-6">
          <h1 className="text-xl font-bold">Bookmarks</h1>
          <p className="text-xs text-muted-foreground mt-0.5">@alex_user</p>
        </div>
        <div className="p-4 space-y-4">
           {/* We re-use the PostCard for bookmarks */}
           <PostCard post={bookmarkedPost} />
           
           <div className="mt-8 text-center text-muted-foreground py-12">
             <h3 className="text-lg font-bold mb-2 text-foreground">Save posts for later</h3>
             <p className="text-sm max-w-sm mx-auto">Don't let the good ones fly away! Bookmark Posts to easily find them again in the future.</p>
           </div>
        </div>
      </div>
      
      {/* Right Sidebar */}
      <div className="hidden lg:block w-[350px]">
         <RightSidebar />
      </div>
    </div>
  );
}
