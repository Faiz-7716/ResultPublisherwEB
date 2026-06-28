"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, Database, FolderKanban, BarChart3, Search, 
  LineChart, Users, Bell, Key, Webhook, CreditCard, Settings,
  LogOut, ChevronLeft, ChevronRight, Menu, CheckCircle2,
  HardDrive, Upload, Plus, ChevronDown
} from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { label: "Datasets", icon: Database, href: "/dashboard/datasets" },
    { label: "Workspaces", icon: FolderKanban, href: "/dashboard/workspaces" },
    { label: "Results", icon: BarChart3, href: "/dashboard/results" },
    { label: "Search", icon: Search, href: "/dashboard/search" },
    { label: "Analytics", icon: LineChart, href: "/dashboard/analytics" },
    { label: "Community", icon: Users, href: "/dashboard/community" },
    { label: "Notifications", icon: Bell, href: "/dashboard/notifications" },
    { label: "Team Members", icon: Users, href: "/dashboard/team" },
    { label: "API Keys", icon: Key, href: "/dashboard/api" },
    { label: "Integrations", icon: Webhook, href: "/dashboard/integrations" },
    { label: "Billing", icon: CreditCard, href: "/dashboard/billing" },
    { label: "Settings", icon: Settings, href: "/dashboard/settings" },
  ];

  return (
    <div className="flex h-screen bg-[#F9FAFB] text-zinc-900 overflow-hidden font-sans selection:bg-[#635BFF]/20">
      
      {/* LEFT SIDEBAR (Desktop) */}
      <motion.aside 
        animate={{ width: isCollapsed ? 80 : 280 }}
        className="hidden md:flex flex-col bg-white border-r border-zinc-200 h-full relative z-20 shadow-sm"
      >
        {/* Toggle Button */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-4 top-8 w-8 h-8 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 shadow-sm hover:shadow-md transition-all z-30"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        {/* Logo Area */}
        <div className="p-6 flex items-center gap-3 border-b border-zinc-100 overflow-hidden shrink-0">
          <div className="w-10 h-10 bg-[#635BFF]/10 text-[#635BFF] rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
            GP
          </div>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -10 }}
                className="whitespace-nowrap flex-1 overflow-hidden"
              >
                <h2 className="font-bold text-sm truncate">Govt. Polytechnic</h2>
                <p className="text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 size={12} /> Verified
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-6 px-4 scrollbar-hide space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href));
            return (
              <Link 
                key={item.label} 
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group relative overflow-hidden ${
                  isActive 
                    ? "bg-[#635BFF]/5 text-[#635BFF] font-semibold" 
                    : "text-zinc-600 font-medium hover:bg-zinc-50 hover:text-zinc-900"
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                {isActive && (
                  <motion.div layoutId="activeNavIndicator" className="absolute left-0 top-0 bottom-0 w-1 bg-[#635BFF] rounded-r-full" />
                )}
                <item.icon size={20} className={`shrink-0 ${isActive ? "text-[#635BFF]" : "text-zinc-400 group-hover:text-zinc-600"}`} />
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0, x: -10 }}
                      className="whitespace-nowrap text-sm"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>

        {/* Bottom Profile / Storage */}
        <div className="p-4 border-t border-zinc-100 shrink-0">
           <AnimatePresence>
             {!isCollapsed && (
               <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mb-4 px-2 overflow-hidden">
                 <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 mb-2">
                   <span>Storage</span>
                   <span>64%</span>
                 </div>
                 <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                   <div className="h-full bg-[#635BFF] w-[64%] rounded-full"></div>
                 </div>
               </motion.div>
             )}
           </AnimatePresence>

           <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-600 font-medium hover:bg-red-50 hover:text-red-600 transition-colors ${isCollapsed ? "justify-center" : ""}`}>
             <LogOut size={20} className="shrink-0" />
             {!isCollapsed && <span className="text-sm">Log out</span>}
           </button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
        
        {/* TOP NAVIGATION */}
        <header className="h-16 bg-white/80 backdrop-blur-xl border-b border-zinc-200/80 flex items-center justify-between px-6 shrink-0 sticky top-0 z-30">
          
          <div className="flex items-center gap-4 flex-1">
            <button className="md:hidden text-zinc-500" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>

            {/* Global Search */}
            <div className="hidden md:flex relative group max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#635BFF] transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search datasets, results, teammates..." 
                className="w-full bg-zinc-100/50 hover:bg-zinc-100 border border-transparent focus:border-[#635BFF]/30 focus:bg-white pl-10 pr-4 py-2 rounded-xl text-sm font-medium transition-all outline-none"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                <kbd className="hidden lg:inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold text-zinc-400 bg-white border border-zinc-200 rounded flex-shrink-0 shadow-sm">⌘</kbd>
                <kbd className="hidden lg:inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold text-zinc-400 bg-white border border-zinc-200 rounded flex-shrink-0 shadow-sm">K</kbd>
              </div>
            </div>
          </div>

          {/* Top Nav Actions */}
          <div className="flex items-center gap-3 lg:gap-4 shrink-0">
             
             {/* Workspace Selector */}
             <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-lg cursor-pointer hover:bg-zinc-100 transition-colors">
               <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
               <span className="text-sm font-semibold text-zinc-700">Engineering WS</span>
               <ChevronDown size={14} className="text-zinc-400" />
             </div>

             <div className="h-6 w-px bg-zinc-200 hidden lg:block mx-1"></div>

             <button className="hidden sm:flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-900 bg-white border border-zinc-200 px-3 py-1.5 rounded-lg shadow-sm hover:shadow transition-all">
               <Upload size={16} /> <span className="hidden xl:inline">Upload CSV</span>
             </button>
             
             <button className="flex items-center gap-2 text-sm font-bold text-white bg-[#635BFF] hover:bg-[#5249E5] px-4 py-1.5 rounded-lg shadow-sm shadow-[#635BFF]/20 hover:shadow-md transition-all">
               <Plus size={16} /> <span>Publish</span>
             </button>

             <button className="relative p-2 text-zinc-500 hover:text-zinc-900 transition-colors">
               <Bell size={20} />
               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
             </button>

             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border-2 border-white shadow-sm cursor-pointer hover:scale-105 transition-transform ml-2"></div>
          </div>

        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto relative p-4 md:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}
