import Link from "next/link";

export default function ResultsHub() {
  return (
    <div className="w-full">
      
      {/* Search Bar */}
        <div className="mb-10 group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center bg-background border border-muted rounded-xl p-3 shadow-sm">
            <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground ml-2 mr-3"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            <input type="text" placeholder="Search results, organizations, datasets..." className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground/80 font-medium" />
            <div className="bg-muted px-2 py-1 rounded text-xs font-bold text-muted-foreground hidden sm:block">⌘ K</div>
          </div>
        </div>

        {/* Featured Carousel */}
        <div className="mb-12 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex gap-4" style={{ minWidth: "max-content" }}>
            
            {/* System Card */}
            <div className="w-[300px] h-[180px] rounded-2xl p-5 text-white flex flex-col justify-between shadow-md relative overflow-hidden" style={{ background: "linear-gradient(to right, #1A3A5C, #2D5E8E)" }}>
              <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg>
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <span className="px-2 py-1 bg-[#8B5CF6] text-[10px] font-bold rounded">SYSTEM</span>
              </div>
              <div className="relative z-10">
                <p className="text-xs font-medium opacity-80 mb-1">Platform Administrator</p>
                <h3 className="text-lg font-bold">Welcome to ResultHub</h3>
              </div>
            </div>

            {/* Cricket Live Card */}
            <div className="w-[300px] h-[180px] rounded-2xl p-5 text-white flex flex-col justify-between shadow-md relative overflow-hidden" style={{ background: "linear-gradient(to right, #022C22, #064E3B)" }}>
              <div className="relative z-10 flex justify-between items-start">
                <span className="px-2 py-1 bg-[#10B981] text-[10px] font-bold rounded text-green-950">CRICKET</span>
              </div>
              <div className="relative z-10">
                <p className="text-xs font-medium opacity-80 mb-1">T20 WORLD CUP</p>
                <h3 className="text-lg font-bold leading-tight">India vs Australia</h3>
              </div>
            </div>

            {/* Football Live Card */}
            <div className="w-[300px] h-[180px] rounded-2xl p-5 text-white flex flex-col justify-between shadow-md relative overflow-hidden" style={{ background: "linear-gradient(to right, #0F172A, #1E1B4B)" }}>
              <div className="relative z-10 flex justify-between items-start">
                <span className="px-2 py-1 bg-[#3B82F6] text-[10px] font-bold rounded">FOOTBALL</span>
              </div>
              <div className="relative z-10">
                <p className="text-xs font-medium opacity-80 mb-1">PREMIER LEAGUE</p>
                <h3 className="text-lg font-bold leading-tight">Arsenal vs Chelsea</h3>
              </div>
            </div>

          </div>
        </div>

        {/* Live Now */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-danger animate-pulse"></span>
            <h2 className="text-xl font-bold tracking-tight">Live Now</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
            
            <div className="w-[280px] flex-shrink-0 bg-background border border-muted rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2 text-danger">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  <span className="text-xs font-bold uppercase tracking-wider">Market</span>
                </div>
                <span className="text-[10px] font-bold text-success bg-success/10 px-2 py-1 rounded">+1.2% ▲</span>
              </div>
              <h3 className="font-bold text-sm">Nifty 50 Index</h3>
              <p className="text-xs text-muted-foreground mb-2">NSE India • Market Open</p>
              <div className="text-xl font-black">24,852.30</div>
            </div>

            <div className="w-[280px] flex-shrink-0 bg-background border border-muted rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2 text-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  <span className="text-xs font-bold uppercase tracking-wider">Election</span>
                </div>
                <span className="text-[10px] font-bold text-muted-foreground bg-muted px-2 py-1 rounded">Seats Declared</span>
              </div>
              <h3 className="font-bold text-sm">Lok Sabha By-Poll</h3>
              <p className="text-xs text-muted-foreground mb-2">Tamil Nadu • Counting in Progress</p>
              <div className="text-xl font-black">234 / 543</div>
            </div>

          </div>
        </div>

        {/* Browse Categories */}
        <div className="mb-12">
          <h2 className="text-xl font-bold tracking-tight mb-4 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            Browse Categories
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
            {[
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-80"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>, label: "Academic", color: "text-[#8B5CF6]", bg: "bg-[#8B5CF6]/10", border: "border-[#8B5CF6]/20" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-80"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>, label: "Government", color: "text-[#6366F1]", bg: "bg-[#6366F1]/10", border: "border-[#6366F1]/20" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-80"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>, label: "Sports", color: "text-[#10B981]", bg: "bg-[#10B981]/10", border: "border-[#10B981]/20" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-80"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>, label: "Politics", color: "text-[#3B82F6]", bg: "bg-[#3B82F6]/10", border: "border-[#3B82F6]/20" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-80"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, label: "Finance", color: "text-[#F59E0B]", bg: "bg-[#F59E0B]/10", border: "border-[#F59E0B]/20" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-80"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>, label: "Entertainment", color: "text-[#EC4899]", bg: "bg-[#EC4899]/10", border: "border-[#EC4899]/20" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-80"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, label: "Technology", color: "text-[#06B6D4]", bg: "bg-[#06B6D4]/10", border: "border-[#06B6D4]/20" },
            ].map((cat, i) => (
              <Link href={`/categories/${cat.label.toLowerCase()}`} key={i} className="flex flex-col items-center gap-2 cursor-pointer">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl ${cat.bg} ${cat.border} border`}>
                  {cat.icon}
                </div>
                <span className="text-xs font-bold text-foreground">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Trending Results */}
          <div>
            <h2 className="text-xl font-bold tracking-tight mb-4 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500"><path d="M17.5 19c2.5-3.5 1-8-3.5-10-1 4-3 5-4.5 4-1.5-1 .5-6-2-8-1.5 2-4.5 6-2.5 11 1.5 3 4.5 4.5 7.5 4.5s4-1.5 5-1.5z"></path></svg>
              Trending Results
            </h2>
            <div className="space-y-3">
              {[
                { rank: 1, title: "UPSC Civil Services Final Merit List 2026", cat: "GOVERNMENT", views: "2.1M views" },
                { rank: 2, title: "Tamil Nadu State Board Class 12 Results", cat: "ACADEMIC", views: "1.8M views" },
                { rank: 3, title: "NVIDIA RTX 5090 Benchmark Scores", cat: "TECHNOLOGY", views: "980K views" },
                { rank: 4, title: "Supreme Court Electoral Bonds Verdict", cat: "LAW", views: "850K views" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-background border border-muted hover:border-primary/30 transition-colors cursor-pointer">
                  <div className="text-2xl font-black text-muted-foreground w-6 text-center">{item.rank}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm mb-1 line-clamp-1">{item.title}</h3>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-orange-500">{item.cat}</span>
                      <span className="text-muted-foreground font-medium">• {item.views}</span>
                    </div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Access */}
          <div>
            <h2 className="text-xl font-bold tracking-tight mb-4 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-500"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              Quick Access
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>, label: "Exam Results", bg: "bg-[#8B5CF6]/10 text-[#8B5CF6]" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>, label: "Recruitment", bg: "bg-[#14B8A6]/10 text-[#14B8A6]" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>, label: "Sports Scores", bg: "bg-[#10B981]/10 text-[#10B981]" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>, label: "Election Live", bg: "bg-[#3B82F6]/10 text-[#3B82F6]" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, label: "Court Orders", bg: "bg-[#64748B]/10 text-[#64748B]" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, label: "Market Reports", bg: "bg-[#F59E0B]/10 text-[#F59E0B]" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-muted hover:bg-muted/30 transition-colors cursor-pointer">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${item.bg}`}>
                    {item.icon}
                  </div>
                  <span className="font-bold text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

    </div>
  );
}
