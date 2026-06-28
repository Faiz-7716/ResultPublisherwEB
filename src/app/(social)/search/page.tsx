"use client";

import { useState } from "react";

export default function SearchPage() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    { name: "Education", count: 42, color: "text-blue-500" },
    { name: "Government", count: 89, color: "text-emerald-500" },
    { name: "Technology", count: 12, color: "text-purple-500" },
    { name: "Healthcare", count: 7, color: "text-pink-500" },
    { name: "Business", count: 24, color: "text-amber-500" }
  ];

  const contentTypes = [
    { name: "Datasets", count: 124 },
    { name: "Organizations", count: 18 },
    { name: "Discussions", count: 56 },
    { name: "Polls", count: 12 }
  ];

  const mockResults = [
    {
      id: 1,
      type: "DATASET",
      title: "2026 Civil Services Final Merit List",
      org: "Union Public Service Commission",
      category: "Government",
      categoryColor: "text-emerald-500 border-emerald-500/20 bg-emerald-500/10",
      description: "Contains the fully published results and merit rankings of all qualified candidates for the current year, verified via PostgreSQL JSONB generic architecture.",
      timeAgo: "Updated 2h ago",
      metrics: "23.4k rows",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
    },
    {
      id: 2,
      type: "ORGANIZATION",
      title: "Anna University",
      org: "Verified Educational Institution",
      category: "Education",
      categoryColor: "text-blue-500 border-blue-500/20 bg-blue-500/10",
      description: "State university in Tamil Nadu offering higher education in Engineering, Technology and Allied Sciences.",
      timeAgo: "Joined 2024",
      metrics: "12 Datasets",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
    },
    {
      id: 3,
      type: "DISCUSSION",
      title: "How to interpret the new Group 4 cutoffs?",
      org: "Started by Ravi Kumar",
      category: "Community",
      categoryColor: "text-purple-500 border-purple-500/20 bg-purple-500/10",
      description: "I've been analyzing the latest release from TNPSC and it seems the baseline score has increased by 15 points. Any thoughts?",
      timeAgo: "Active 10m ago",
      metrics: "45 Replies",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">

      {/* Command Center: Search Header (Sticky) */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-xl border-b border-muted pb-4 pt-6 -mt-6 -mx-2 sm:-mx-4 lg:-mx-6 px-2 sm:px-4 lg:px-6">
        <div className="mx-auto max-w-[1440px]">
          
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Massive Search Bar */}
            <div className="relative group w-full flex-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 rounded-xl blur opacity-30 group-focus-within:opacity-100 transition duration-500"></div>
              <div className="relative flex items-center bg-background/90 backdrop-blur-sm rounded-xl shadow-sm border border-muted focus-within:border-primary/50 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted-foreground ml-4 shrink-0"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input 
                  type="text" 
                  placeholder="Search datasets, organizations, discussions..." 
                  autoFocus 
                  className="w-full bg-transparent border-none outline-none text-base sm:text-lg font-medium p-3.5 sm:p-4 placeholder:text-muted-foreground/60" 
                />
                <div className="hidden sm:flex items-center gap-1.5 mr-4 shrink-0">
                   <kbd className="hidden lg:inline-flex items-center justify-center h-6 px-2 text-[11px] font-bold text-muted-foreground bg-muted border border-muted-foreground/20 rounded-md">⌘</kbd>
                   <kbd className="hidden lg:inline-flex items-center justify-center h-6 px-2 text-[11px] font-bold text-muted-foreground bg-muted border border-muted-foreground/20 rounded-md">K</kbd>
                </div>
                {/* Mobile Filters Button */}
                <button className="lg:hidden mr-2 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                </button>
              </div>
            </div>

            {/* Global Actions (Desktop) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <div className="text-sm font-semibold text-muted-foreground">Sort by:</div>
              <select className="bg-muted/30 border border-muted rounded-lg px-3 py-2.5 text-sm font-bold outline-none focus:border-primary transition-colors cursor-pointer appearance-none pr-8 relative">
                 <option>Best Match</option>
                 <option>Newest</option>
                 <option>Most Popular</option>
              </select>
            </div>
          </div>

          {/* Mobile Segments (Horizontal Scroll) */}
          <div className="lg:hidden mt-4 flex gap-1 bg-muted/30 p-1 rounded-xl overflow-x-auto hide-scrollbar w-full border border-muted/50">
             {["All", "Datasets", "Organizations", "Discussions"].map(tab => (
               <button 
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`px-4 py-2 flex-1 flex justify-center items-center font-semibold text-[13px] transition-all rounded-lg whitespace-nowrap ${
                   activeTab === tab 
                     ? "bg-background text-foreground shadow-sm border border-muted/50" 
                     : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                 }`}
               >
                 {tab}
               </button>
             ))}
          </div>

        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="flex-1 bg-muted/5">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            
            {/* Left Sidebar (Filters) - Desktop Only */}
            <aside className="hidden lg:block w-[260px] shrink-0 sticky top-[160px] h-fit">
              
              <div className="mb-8">
                <h3 className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-4">Content Type</h3>
                <div className="space-y-1">
                  <label className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded-lg cursor-pointer group transition-colors">
                    <input type="radio" name="type" className="accent-primary w-4 h-4" defaultChecked />
                    <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">All Results</span>
                    <span className="ml-auto text-xs font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded-full">142</span>
                  </label>
                  {contentTypes.map(type => (
                    <label key={type.name} className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded-lg cursor-pointer group transition-colors">
                      <input type="radio" name="type" className="accent-primary w-4 h-4" />
                      <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">{type.name}</span>
                      <span className="ml-auto text-xs font-semibold text-muted-foreground/60">{type.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-4">Categories</h3>
                <div className="space-y-1">
                  {categories.map(cat => (
                    <label key={cat.name} className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded-lg cursor-pointer group transition-colors">
                      <input type="checkbox" className="accent-primary w-4 h-4 rounded border-muted" />
                      <span className={`w-2 h-2 rounded-full ${cat.color.replace('text-', 'bg-')}`}></span>
                      <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{cat.name}</span>
                      <span className="ml-auto text-xs font-medium text-muted-foreground/60">{cat.count}</span>
                    </label>
                  ))}
                </div>
              </div>

            </aside>

            {/* Results Feed */}
            <div className="flex-1 min-w-0 flex flex-col gap-4">
              
              <div className="hidden lg:flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-muted-foreground">Showing 142 results for "latest"</span>
              </div>

              {/* High Density Premium Cards */}
              {mockResults.map(result => (
                <div key={result.id} className="bg-background border border-muted rounded-2xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer group relative overflow-hidden">
                  
                  {/* Subtle Gradient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  
                  <div className="relative z-10 flex flex-col sm:flex-row gap-5">
                    
                    {/* Icon Block */}
                    <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-xl bg-muted/30 border border-muted/50 items-center justify-center text-muted-foreground group-hover:bg-background group-hover:border-primary/30 group-hover:text-primary transition-colors shadow-sm">
                      {result.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Meta Top Row */}
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border ${result.categoryColor}`}>
                          {result.type}
                        </span>
                        <span className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
                           <span className="w-1 h-1 rounded-full bg-muted-foreground/40"></span>
                           {result.org}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
                        {result.title}
                      </h3>

                      {/* Snippet */}
                      <p className="text-sm text-muted-foreground font-medium line-clamp-2 leading-relaxed mb-4">
                        {result.description}
                      </p>

                      {/* Meta Bottom Row */}
                      <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                           {result.timeAgo}
                        </span>
                        <span className="flex items-center gap-1.5">
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                           {result.metrics}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}

              {/* Load More */}
              <div className="mt-8 flex justify-center">
                 <button className="bg-background border border-muted hover:bg-muted text-foreground font-bold text-sm px-6 py-2.5 rounded-xl transition-colors shadow-sm flex items-center gap-2">
                   Load more results
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                 </button>
              </div>

            </div>

          </div>
        </div>
      </div>

      </main>
  );
}
