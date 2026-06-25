"use client";

import Link from "next/link";

export default function NotificationsRightSidebar() {
  return (
    <aside className="sticky top-[88px] flex-col gap-6 hidden xl:flex h-[calc(100vh-88px)] w-[320px] overflow-y-auto hide-scrollbar pb-6">
      
      {/* Today's Activity Panel */}
      <div className="bg-muted/10 border border-muted rounded-2xl overflow-hidden shadow-sm">
        <h3 className="font-black text-lg p-4 pb-3 border-b border-muted bg-background/50">Today's Activity</h3>
        <div className="p-4 grid grid-cols-2 gap-3">
          <div className="flex flex-col bg-muted/30 p-3 rounded-xl border border-muted/50">
            <span className="text-2xl font-black text-emerald-500">5</span>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1">Followers</span>
          </div>
          <div className="flex flex-col bg-muted/30 p-3 rounded-xl border border-muted/50">
            <span className="text-2xl font-black text-pink-500">12</span>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1">Likes</span>
          </div>
          <div className="flex flex-col bg-muted/30 p-3 rounded-xl border border-muted/50">
            <span className="text-2xl font-black text-blue-500">2</span>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1">Poll Votes</span>
          </div>
          <div className="flex flex-col bg-muted/30 p-3 rounded-xl border border-muted/50">
            <span className="text-2xl font-black text-purple-500">3</span>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1">Comments</span>
          </div>
        </div>
      </div>

      {/* Weekly Summary Widget */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-4 flex items-center justify-between border-b border-primary/10">
           <h3 className="font-black text-foreground">This Week</h3>
           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary"><path d="M2 20h20"></path><path d="M5 20V14"></path><path d="M9 20V8"></path><path d="M13 20V12"></path><path d="M17 20V4"></path></svg>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground font-medium">New Followers</span>
            <span className="font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md">+42</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground font-medium">Post Likes</span>
            <span className="font-bold text-pink-500 bg-pink-500/10 px-2 py-0.5 rounded-md">+128</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground font-medium">Comments</span>
            <span className="font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-md">+31</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground font-medium">Poll Votes</span>
            <span className="font-bold text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded-md">+7</span>
          </div>
        </div>
      </div>

      {/* Floating Notification Insights */}
      <div className="bg-muted/10 border border-muted rounded-2xl overflow-hidden shadow-sm">
        <h3 className="font-black text-lg p-4 pb-2">Insights</h3>
        
        <div className="flex flex-col">
          <div className="px-4 py-3 hover:bg-muted/30 transition-colors border-b border-muted/30">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Most Active Org</span>
            </div>
            <div className="flex items-center gap-2 mt-1.5">
              <div className="w-6 h-6 rounded-md bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center">G</div>
              <h4 className="font-bold text-sm">Government Jobs Board</h4>
            </div>
            <p className="text-xs text-primary font-bold mt-1.5">15 Updates This Week</p>
          </div>
          
          <div className="px-4 py-3 hover:bg-muted/30 transition-colors">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Most Engaged Post</span>
            </div>
            <h4 className="font-bold text-sm mt-1.5 line-clamp-1">UPSC Cutoff Analysis</h4>
            <p className="text-xs text-pink-500 font-bold mt-1.5 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              347 Interactions
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-muted/10 border border-muted rounded-2xl overflow-hidden shadow-sm">
        <h3 className="font-black text-lg p-4 pb-3 border-b border-muted">Quick Actions</h3>
        <div className="p-2 flex flex-col gap-1">
          <button className="flex items-center gap-3 p-3 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors text-left font-semibold text-sm">
            <span className="bg-muted w-8 h-8 rounded-full flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span>
            Create Update
          </button>
          <button className="flex items-center gap-3 p-3 hover:bg-amber-500/10 hover:text-amber-600 rounded-xl transition-colors text-left font-semibold text-sm">
            <span className="bg-muted w-8 h-8 rounded-full flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></span>
            Create Complaint
          </button>
          <button className="flex items-center gap-3 p-3 hover:bg-accent/10 hover:text-accent rounded-xl transition-colors text-left font-semibold text-sm">
            <span className="bg-muted w-8 h-8 rounded-full flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></span>
            Create Poll
          </button>
        </div>
      </div>

      {/* Footer links */}
      <div className="flex flex-wrap gap-x-3 gap-y-1 px-4 text-xs font-medium text-muted-foreground mt-2">
         <Link href="/terms" className="hover:underline">Terms</Link>
         <Link href="/privacy" className="hover:underline">Privacy</Link>
         <span>© 2026 ResultHub Corp.</span>
      </div>

    </aside>
  );
}
