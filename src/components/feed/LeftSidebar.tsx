"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeftSidebar() {
  const pathname = usePathname();

  const navLinks = [
    { 
      label: "Home", 
      href: "/", 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    },
    { 
      label: "Explore", 
      href: "/explore", 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    },
    { 
      label: "Notifications", 
      href: "/notifications", 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
    },
    { 
      label: "Bookmarks", 
      href: "/bookmarks", 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
    },
    { 
      label: "Profile", 
      href: "/profile", 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    },
  ];

  return (
    <aside className="sticky top-[88px] flex-col gap-6 hidden lg:flex h-[calc(100vh-88px)] w-64 overflow-y-auto hide-scrollbar pb-6">
      
      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-5 px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? "bg-primary/10 text-primary font-bold" 
                  : "text-foreground/80 hover:bg-muted font-medium"
              }`}
            >
              <div className={isActive ? "text-primary" : "text-foreground/70"}>
                {link.icon}
              </div>
              <span className="text-[16px]">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Action Button */}
      <button className="w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-sm hover:bg-primary/90 transition-all active:scale-[0.98]">
        Post Update
      </button>

      <div className="mt-auto">
        <div className="bg-muted/30 border border-muted p-4 rounded-2xl flex items-center gap-3 cursor-pointer hover:bg-muted/50 transition-colors">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            A
          </div>
          <div className="flex-1 overflow-hidden">
             <h4 className="font-bold text-sm truncate">Alex User</h4>
             <p className="text-xs text-muted-foreground truncate">@alex_user</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
        </div>
      </div>

    </aside>
  );
}
