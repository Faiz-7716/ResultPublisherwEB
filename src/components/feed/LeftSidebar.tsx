"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CreatePostModal from "./CreatePostModal";

export default function LeftSidebar() {
  const pathname = usePathname();
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const navLinks = [
    { 
      label: "Home", 
      href: "/", 
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    },
    { 
      label: "Explore", 
      href: "/explore", 
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    },
    { 
      label: "Notifications", 
      href: "/notifications", 
      badge: 3, 
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
    },
    { 
      label: "Bookmarks", 
      href: "/bookmarks", 
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
    },
    { 
      label: "Profile", 
      href: "/profile", 
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    },
  ];

  return (
    <>
      <aside className="sticky top-[88px] hidden lg:block h-[calc(100vh-88px)] w-[88px] z-40 group/sidebar">
        
        {/* Sidebar Container */}
        <div className="absolute top-0 left-0 h-full w-[88px] group-hover/sidebar:w-64 bg-background transition-all duration-300 ease-in-out overflow-y-auto overflow-x-hidden hide-scrollbar flex flex-col border-r border-muted z-50 pb-6">
          
          {/* Navigation */}
          <nav className="flex flex-col gap-2 mt-2 px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative flex items-center p-2 rounded-2xl transition-all duration-300 group/navitem ${
                    isActive 
                      ? "bg-primary/10 text-primary font-bold shadow-sm" 
                      : "text-foreground/80 hover:bg-muted font-medium hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center w-full">
                    <div className={`w-[48px] h-[48px] flex items-center justify-center shrink-0 transition-transform duration-300 ${isActive ? "text-primary" : "text-foreground/70"}`}>
                      {link.icon}
                    </div>
                    <span className="whitespace-nowrap ml-3 text-[16px] tracking-wide opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
                      {link.label}
                    </span>
                  </div>
                  
                  {/* Tooltip (Only visible when sidebar is NOT hovered, but item IS hovered) */}
                  <div className="absolute left-[72px] px-3 py-1.5 bg-zinc-900 text-white text-xs font-bold rounded-lg shadow-xl opacity-0 group-hover/navitem:opacity-100 group-hover/sidebar:!opacity-0 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">
                    {link.label}
                  </div>
                  
                  {/* Notification Badge */}
                  {link.badge && (
                    <div className="absolute top-3 left-[38px] bg-primary text-white text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
                      {link.badge}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="px-3 mt-4 relative group/fab">
            <button 
              onClick={() => setIsPostModalOpen(true)}
              className="w-full h-[64px] bg-primary text-white font-bold rounded-2xl shadow-lg hover:shadow-primary/30 hover:bg-primary/90 transition-all duration-300 active:scale-95 flex items-center overflow-hidden"
            >
              <div className="w-[64px] h-[64px] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <span className="whitespace-nowrap text-lg opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
                Post Update
              </span>
            </button>
            {/* FAB Tooltip */}
            <div className="absolute left-[72px] top-1/2 -translate-y-1/2 px-3 py-1.5 bg-zinc-900 text-white text-xs font-bold rounded-lg shadow-xl opacity-0 group-hover/fab:opacity-100 group-hover/sidebar:!opacity-0 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">
              Create
            </div>
          </div>

          {/* Profile Section (Bottom) */}
          <div className="mt-auto px-3 relative group/profile">
            <div className="h-[64px] bg-muted/20 border border-muted rounded-2xl flex items-center cursor-pointer hover:bg-muted/60 transition-all duration-300 hover:shadow-sm overflow-hidden">
              <div className="w-[64px] h-[64px] flex items-center justify-center shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shadow-inner">
                  A
                </div>
              </div>
              <div className="flex-1 flex items-center justify-between opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 pr-4 whitespace-nowrap">
                <div className="overflow-hidden">
                   <h4 className="font-bold text-sm truncate">Alex User</h4>
                   <p className="text-xs text-muted-foreground truncate">@alex_user</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground shrink-0 ml-2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
              </div>
            </div>
          </div>
          
        </div>
      </aside>

      <CreatePostModal 
        isOpen={isPostModalOpen} 
        onClose={() => setIsPostModalOpen(false)} 
        defaultType="UPDATE" 
      />
    </>
  );
}
