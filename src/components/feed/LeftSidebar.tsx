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
      label: "Search", 
      href: "/search", 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    },
    { 
      label: "Home", 
      href: "/", 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    },
    { 
      label: "Explore", 
      href: "/explore", 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
    },
    { 
      label: "Notifications", 
      href: "/notifications", 
      badge: 3, 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
    },
    { 
      label: "Bookmarks", 
      href: "/bookmarks", 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
    },
  ];

  return (
    <>
      <aside className="sticky top-0 hidden lg:block h-screen w-[88px] z-40 group/sidebar">
        
        {/* Sidebar Container */}
        <div className="absolute top-0 left-0 h-full w-[88px] group-hover/sidebar:w-[260px] bg-background transition-all duration-300 ease-in-out overflow-y-auto overflow-x-hidden hide-scrollbar flex flex-col border-r border-muted shadow-sm z-50">
          
          {/* Brand Logo Header */}
          <div className="h-[80px] flex items-center px-4 shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white font-black text-xl shadow-sm shrink-0">
                R
              </div>
              <span className="text-xl font-extrabold tracking-tight opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                ResultHub
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 mt-4 px-3 flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative flex items-center p-2 rounded-2xl transition-all duration-200 group/navitem ${
                    isActive 
                      ? "bg-primary/10 text-primary font-bold shadow-sm" 
                      : "text-foreground/80 hover:bg-muted font-semibold hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center w-full">
                    <div className={`w-[48px] h-[48px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/navitem:scale-110 ${isActive ? "text-primary" : "text-muted-foreground group-hover/navitem:text-foreground"}`}>
                      {link.icon}
                    </div>
                    <span className="whitespace-nowrap ml-2 text-[16px] tracking-wide opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
                      {link.label}
                    </span>
                  </div>
                  
                  {/* Tooltip (Only visible when sidebar is NOT hovered, but item IS hovered) */}
                  <div className="absolute left-[80px] px-3 py-1.5 bg-zinc-900 text-white text-xs font-bold rounded-lg shadow-xl opacity-0 group-hover/navitem:opacity-100 group-hover/sidebar:!opacity-0 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">
                    {link.label}
                  </div>
                  
                  {/* Notification Badge */}
                  {link.badge && (
                    <div className="absolute top-3 left-[42px] bg-primary text-white text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-sm ring-2 ring-background">
                      {link.badge}
                    </div>
                  )}
                </Link>
              );
            })}

            {/* Action Button */}
            <div className="mt-4 relative group/fab">
              <button 
                onClick={() => setIsPostModalOpen(true)}
                className="w-full h-[64px] bg-foreground text-background font-bold rounded-2xl shadow-lg hover:bg-foreground/90 transition-all duration-300 active:scale-95 flex items-center overflow-hidden"
              >
                <div className="w-[64px] h-[64px] flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <span className="whitespace-nowrap text-lg opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
                  Post Update
                </span>
              </button>
              {/* FAB Tooltip */}
              <div className="absolute left-[80px] top-1/2 -translate-y-1/2 px-3 py-1.5 bg-zinc-900 text-white text-xs font-bold rounded-lg shadow-xl opacity-0 group-hover/fab:opacity-100 group-hover/sidebar:!opacity-0 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">
                Create
              </div>
            </div>
          </nav>

          {/* Bottom Actions (Auth & Profile) */}
          <div className="mt-auto flex flex-col gap-2 pb-6 px-3">
            
            {/* Organizations Link */}
            <Link href="/organizations" className="relative flex items-center p-2 rounded-2xl transition-all duration-200 group/navitem text-foreground/80 hover:bg-muted font-semibold hover:text-foreground">
              <div className="flex items-center w-full">
                <div className="w-[48px] h-[48px] flex items-center justify-center shrink-0 text-muted-foreground group-hover/navitem:text-foreground transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <span className="whitespace-nowrap ml-2 text-[16px] tracking-wide opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
                  Organizations
                </span>
              </div>
              <div className="absolute left-[80px] px-3 py-1.5 bg-zinc-900 text-white text-xs font-bold rounded-lg shadow-xl opacity-0 group-hover/navitem:opacity-100 group-hover/sidebar:!opacity-0 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">
                Organizations
              </div>
            </Link>

            {/* Login Link */}
            <Link href="/login" className="relative flex items-center p-2 rounded-2xl transition-all duration-200 group/navitem text-foreground/80 hover:bg-muted font-semibold hover:text-foreground">
              <div className="flex items-center w-full">
                <div className="w-[48px] h-[48px] flex items-center justify-center shrink-0 text-muted-foreground group-hover/navitem:text-foreground transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                </div>
                <span className="whitespace-nowrap ml-2 text-[16px] tracking-wide opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
                  Sign In
                </span>
              </div>
              <div className="absolute left-[80px] px-3 py-1.5 bg-zinc-900 text-white text-xs font-bold rounded-lg shadow-xl opacity-0 group-hover/navitem:opacity-100 group-hover/sidebar:!opacity-0 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">
                Sign In
              </div>
            </Link>
            
            <div className="w-full h-px bg-muted my-2"></div>

            {/* Profile Block */}
            <Link href="/profile" className="relative group/profile block">
              <div className="h-[64px] bg-transparent border border-transparent rounded-2xl flex items-center group-hover/profile:bg-muted/50 group-hover/profile:border-muted transition-all duration-300 overflow-hidden">
                <div className="w-[64px] h-[64px] flex items-center justify-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    A
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-between opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 pr-4 whitespace-nowrap">
                  <div className="overflow-hidden">
                     <h4 className="font-bold text-sm truncate">Alex User</h4>
                     <p className="text-[11px] text-muted-foreground truncate uppercase font-bold tracking-wider">Free Plan</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted-foreground shrink-0 ml-2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </div>
              </div>
              <div className="absolute left-[80px] top-1/2 -translate-y-1/2 px-3 py-1.5 bg-zinc-900 text-white text-xs font-bold rounded-lg shadow-xl opacity-0 group-hover/profile:opacity-100 group-hover/sidebar:!opacity-0 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">
                Profile
              </div>
            </Link>

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
