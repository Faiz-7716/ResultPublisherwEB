"use client";

import Link from "next/link";
import { useState } from "react";

export default function ExplorePage() {
  const [activeDate, setActiveDate] = useState("Any time");

  // Netflix-style large visual tiles for trending content
  const trendingTiles = [
    {
      id: 1,
      title: "TNPSC Group 4 Results",
      category: "GOVERNMENT",
      color: "from-emerald-500/80 to-emerald-900/80",
      image: "bg-[url('https://images.unsplash.com/photo-1541872526845-a4ce83563fe9?q=80&w=600&auto=format&fit=crop')]"
    },
    {
      id: 2,
      title: "Anna University Rankings 2026",
      category: "EDUCATION",
      color: "from-blue-500/80 to-blue-900/80",
      image: "bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop')]"
    },
    {
      id: 3,
      title: "Global Tech Salaries Q3",
      category: "TECHNOLOGY",
      color: "from-purple-500/80 to-purple-900/80",
      image: "bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop')]"
    },
    {
      id: 4,
      title: "IPL 2026 Live Statistics",
      category: "SPORTS",
      color: "from-orange-500/80 to-orange-900/80",
      image: "bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=600&auto=format&fit=crop')]"
    },
  ];

  // High-density premium catalog cards matching search page aesthetics
  const exploreResults = [
    {
      id: 1,
      type: "DATASET",
      title: "Class of 2026 CS Midterm Distribution",
      org: "Stanford University",
      category: "Education",
      categoryColor: "text-blue-500 border-blue-500/20 bg-blue-500/10",
      description: "Complete anonymized dataset of CS101 midterm scores containing grade curves, demographic breakdowns, and historical comparisons.",
      timeAgo: "Published 2 hrs ago",
      views: "14.2k",
      downloads: "3,402",
      live: true,
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
    },
    {
      id: 2,
      type: "RECORD",
      title: "Q3 Healthcare Funding Report",
      org: "Ministry of Health",
      category: "Government",
      categoryColor: "text-emerald-500 border-emerald-500/20 bg-emerald-500/10",
      description: "Detailed budget allocations, grant distributions, and regional spending metrics across all state hospitals.",
      timeAgo: "Published 1 day ago",
      views: "8.5k",
      downloads: "1,205",
      live: false,
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    },
    {
      id: 3,
      type: "DISCUSSION",
      title: "Impact of AI on Entry-Level Tech Jobs",
      org: "Tech Community",
      category: "Technology",
      categoryColor: "text-purple-500 border-purple-500/20 bg-purple-500/10",
      description: "Analyzing the shift in hiring patterns based on the latest Silicon Valley dataset releases.",
      timeAgo: "Active 5 mins ago",
      views: "45.1k",
      downloads: "0",
      live: true,
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-background">
      
      {/* Immersive Hero Banner */}
      <section className="relative w-full overflow-hidden bg-zinc-950 border-b border-zinc-800">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[url('https://resulthub.vercel.app/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        
        {/* Glowing Accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]"></div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8 py-16 sm:py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-white">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Millions of Records</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl font-medium">
            Discover trending datasets, deep dive into organizational analytics, and browse the global catalog.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="flex-1 bg-muted/5">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex gap-10">
          
          {/* Left Sidebar (Desktop Only) */}
          <aside className="hidden lg:block w-[260px] shrink-0 sticky top-[88px] h-[calc(100vh-88px)] overflow-y-auto hide-scrollbar pb-10">
            
            <div className="mb-10">
              <h3 className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-4">Domain Filters</h3>
              <div className="space-y-1">
                {['Education', 'Government', 'Technology', 'Sports', 'Finance', 'Politics'].map((domain) => (
                  <label key={domain} className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded-lg cursor-pointer group transition-colors">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-muted-foreground/30 rounded focus:ring-2 focus:ring-primary/20 checked:bg-primary checked:border-primary transition-all cursor-pointer" />
                      <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{domain}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-4">Date Range</h3>
              <div className="space-y-1">
                {['Any time', 'Past 24 hours', 'Past week', 'Past month'].map((date) => (
                  <label key={date} className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded-lg cursor-pointer group transition-colors">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="radio" 
                        name="date_range" 
                        value={date}
                        checked={activeDate === date}
                        onChange={(e) => setActiveDate(e.target.value)}
                        className="peer appearance-none w-5 h-5 border-2 border-muted-foreground/30 rounded-full focus:ring-2 focus:ring-primary/20 checked:border-primary transition-all cursor-pointer" 
                      />
                      <div className="absolute w-2.5 h-2.5 bg-primary rounded-full scale-0 peer-checked:scale-100 pointer-events-none transition-transform"></div>
                    </div>
                    <span className={`text-sm font-semibold transition-colors ${activeDate === date ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                      {date}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
          </aside>

          {/* Right Feed Container */}
          <div className="flex-1 min-w-0 flex flex-col w-full">
            
            {/* Mobile Header (Filters & Sort) */}
            <div className="flex lg:hidden items-center justify-between mb-6">
              <button className="flex items-center gap-2 bg-background border border-muted px-4 py-2 rounded-xl text-sm font-bold shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                Filters
              </button>
              <select className="bg-transparent text-sm font-bold text-muted-foreground outline-none">
                 <option>Sort by: Newest</option>
                 <option>Most Popular</option>
              </select>
            </div>

            {/* Trending Section (Netflix Tiles) */}
            <div className="mb-10 w-full">
              <div className="flex items-center justify-between mb-4 px-1">
                <h2 className="text-lg font-extrabold flex items-center gap-2">
                  <span className="text-red-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2L10.29 4.34C9.56 5.35 9.07 6.49 8.87 7.7L8.74 8.6L7.86 8.79C6.55 9.07 5.41 9.77 4.6 10.8L3 12.8L4.6 14.8C5.41 15.83 6.55 16.53 7.86 16.81L8.74 17L8.87 17.9C9.07 19.11 9.56 20.25 10.29 21.26L12 23.6L13.71 21.26C14.44 20.25 14.93 19.11 15.13 17.9L15.26 17L16.14 16.81C17.45 16.53 18.59 15.83 19.4 14.8L21 12.8L19.4 10.8C18.59 9.77 17.45 9.07 16.14 8.79L15.26 8.6L15.13 7.7C14.93 6.49 14.44 5.35 13.71 4.34L12 2Z"></path></svg>
                  </span>
                  Trending Now
                </h2>
                <div className="hidden lg:flex items-center gap-3">
                  <div className="text-sm font-semibold text-muted-foreground">Sort by:</div>
                  <select className="bg-transparent text-sm font-bold outline-none cursor-pointer">
                    <option>Newest</option>
                    <option>Most Popular</option>
                  </select>
                </div>
              </div>
              
              {/* Horizontal Scroll Container */}
              <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
                {trendingTiles.map(tile => (
                  <div key={tile.id} className="relative shrink-0 w-[260px] sm:w-[280px] h-[160px] sm:h-[180px] rounded-2xl overflow-hidden snap-start cursor-pointer group border border-muted/50 shadow-sm">
                    {/* Background Image */}
                    <div className={`absolute inset-0 ${tile.image} bg-cover bg-center transition-transform duration-700 group-hover:scale-110`}></div>
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${tile.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/80 mb-1">
                        {tile.category}
                      </span>
                      <h3 className="text-lg font-extrabold text-white leading-tight">
                        {tile.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Catalog Feed */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-muted-foreground px-1 mb-1">Latest Records</h3>
              
              {exploreResults.map(result => (
                <div key={result.id} className="bg-background border border-muted rounded-2xl p-5 sm:p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer group relative overflow-hidden">
                  
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
                        
                        {/* Live Badge */}
                        {result.live && (
                          <span className="ml-auto flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Live
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-2 pr-10 sm:pr-0">
                        {result.title}
                      </h3>

                      {/* Snippet */}
                      <p className="text-sm text-muted-foreground font-medium line-clamp-2 leading-relaxed mb-5">
                        {result.description}
                      </p>

                      {/* Meta Bottom Row (Prioritized Metrics) */}
                      <div className="flex items-center gap-5 text-xs font-semibold text-muted-foreground">
                        <span className="flex items-center gap-1.5" title="Views">
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                           {result.views}
                        </span>
                        <span className="flex items-center gap-1.5" title="Downloads">
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                           {result.downloads}
                        </span>
                        <span className="flex items-center gap-1.5 ml-auto sm:ml-0" title="Published Time">
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                           {result.timeAgo}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}

              {/* Load More */}
              <div className="mt-8 flex justify-center pb-12">
                 <button className="bg-background border border-muted hover:bg-muted text-foreground font-bold text-sm px-6 py-2.5 rounded-xl transition-colors shadow-sm flex items-center gap-2">
                   Load more records
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                 </button>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
