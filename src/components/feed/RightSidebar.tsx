"use client";

import Link from "next/link";

export default function RightSidebar() {
  return (
    <aside className="sticky top-[88px] flex-col gap-6 hidden xl:flex h-[calc(100vh-88px)] w-80 overflow-y-auto hide-scrollbar pb-6">
      
      {/* Search Mini */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground group-focus-within:text-primary"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <input 
          type="text" 
          placeholder="Search datasets, users..." 
          className="w-full bg-muted/50 border border-transparent focus:border-primary focus:bg-background rounded-full py-2.5 pl-10 pr-4 text-sm font-medium outline-none transition-all"
        />
      </div>

      {/* Trending Section */}
      <div className="bg-muted/10 border border-muted rounded-2xl overflow-hidden">
        <h3 className="font-black text-lg p-4 pb-2">Trending on ResultHub</h3>
        
        <div className="flex flex-col">
          {[
            { tag: "TNSB", title: "Class 12 State Board Results", views: "1.2M posts" },
            { tag: "UPSC", title: "Civil Services Final Merit", views: "845K posts" },
            { tag: "IPL", title: "CSK vs RCB Live Score", views: "430K posts" },
            { tag: "Tech", title: "AI Regulation Debate", views: "120K posts" },
          ].map((item, i) => (
            <div key={i} className="px-4 py-3 hover:bg-muted/30 cursor-pointer transition-colors">
               <div className="flex justify-between items-center mb-1">
                 <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">{item.tag}</span>
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
               </div>
               <h4 className="font-bold text-sm">{item.title}</h4>
               <p className="text-xs text-muted-foreground mt-1">{item.views}</p>
            </div>
          ))}
        </div>
        
        <button className="w-full text-primary text-sm font-bold p-4 text-left hover:bg-primary/5 transition-colors">
          Show more
        </button>
      </div>

      {/* Who to Follow */}
      <div className="bg-muted/10 border border-muted rounded-2xl overflow-hidden">
        <h3 className="font-black text-lg p-4 pb-2">Suggested Publishers</h3>
        
        <div className="flex flex-col">
          {[
            { name: "Anna University", handle: "@anna_univ", verified: true, color: "bg-blue-100 text-blue-600" },
            { name: "TNPSC Official", handle: "@tnpsc", verified: true, color: "bg-emerald-100 text-emerald-600" },
            { name: "Tech Crunch", handle: "@techcrunch", verified: false, color: "bg-purple-100 text-purple-600" },
          ].map((org, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/30 cursor-pointer transition-colors">
               <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${org.color}`}>
                 {org.name[0]}
               </div>
               <div className="flex-1 overflow-hidden">
                 <div className="flex items-center gap-1">
                    <h4 className="font-bold text-sm truncate">{org.name}</h4>
                    {org.verified && <svg width="14" height="14" viewBox="0 0 24 24" fill="#3b82f6" stroke="white" strokeWidth="2"><polygon points="12 2 15.09 5.09 19.5 5.5 19.91 9.91 23 12 19.91 14.09 19.5 18.5 15.09 18.91 12 22 8.91 18.91 4.5 18.5 4.09 14.09 1 12 4.09 9.91 4.5 5.5 8.91 5.09 12 2"></polygon></svg>}
                 </div>
                 <p className="text-xs text-muted-foreground truncate">{org.handle}</p>
               </div>
               <button className="bg-foreground text-background text-xs font-bold px-4 py-1.5 rounded-full hover:opacity-80 transition-opacity">
                 Follow
               </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer links */}
      <div className="flex flex-wrap gap-x-3 gap-y-1 px-4 text-xs font-medium text-muted-foreground">
         <Link href="/terms" className="hover:underline">Terms of Service</Link>
         <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
         <Link href="/guidelines" className="hover:underline">Guidelines</Link>
         <span>© 2026 ResultHub Corp.</span>
      </div>

    </aside>
  );
}
