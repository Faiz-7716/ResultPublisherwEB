"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Organizations", href: "/organizations" },
    { name: "Community", href: "/community" }
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-muted bg-background/70 backdrop-blur-xl transition-all">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
          
          {/* ZONE 1: Logo & Mobile Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Hamburger Button (Mobile only) */}
            <button 
              className="lg:hidden p-2 -ml-2 text-foreground hover:bg-muted rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white font-black text-base shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                R
              </div>
              <span className="text-xl font-extrabold tracking-tight hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                ResultHub
              </span>
            </Link>
          </div>

          {/* ZONE 2: Central Navigation (Desktop Only) */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8 gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                    isActive 
                      ? "bg-muted/80 text-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* ZONE 3: Actions (Search, Auth) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            
            {/* Command Palette Trigger (Search) */}
            <button 
              onClick={() => router.push('/search')}
              className="hidden md:flex items-center gap-3 text-sm text-muted-foreground bg-muted/40 border border-muted px-3 py-1.5 rounded-xl hover:bg-muted/80 hover:border-muted-foreground/30 transition-all group w-[220px]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-70 group-hover:opacity-100 transition-opacity"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <span className="flex-1 text-left">Search...</span>
              <kbd className="hidden lg:inline-flex items-center justify-center h-5 px-1.5 text-[10px] font-bold text-muted-foreground bg-background border border-muted rounded shadow-sm">⌘K</kbd>
            </button>
            
            {/* Mobile Search Icon */}
            <Link href="/search" className="md:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </Link>

            <div className="hidden sm:flex items-center gap-3 border-l border-muted pl-4 ml-1">
              <Link href="/login" className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors px-2 py-2">
                Sign In
              </Link>
              
              <Link href="/signup" className="flex items-center justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-bold text-background hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm">
                Get Started
              </Link>
            </div>
            
            {/* Mobile simplified actions */}
            <Link href="/login" className="sm:hidden text-sm font-extrabold text-background bg-foreground px-4 py-1.5 rounded-xl shadow-sm">
              Log In
            </Link>
          </div>
        </div>
      </nav>

      {/* Premium Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Glass Backdrop */}
          <div 
            className="absolute inset-0 bg-background/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className="absolute top-0 left-0 bottom-0 w-[300px] bg-background border-r border-muted shadow-2xl animate-in slide-in-from-left duration-300 flex flex-col">
            <div className="p-4 sm:p-6 border-b border-muted flex items-center justify-between bg-muted/10">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white font-black text-base shadow-sm">
                  R
                </div>
                <span className="text-xl font-extrabold tracking-tight">ResultHub</span>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors bg-background border border-muted shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1">
              <span className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-2 px-3">Navigation</span>
              
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${pathname === '/' ? 'bg-primary/10 text-primary font-bold' : 'text-foreground font-semibold hover:bg-muted'}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                Home
              </Link>
              
              <Link href="/explore" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${pathname === '/explore' ? 'bg-primary/10 text-primary font-bold' : 'text-foreground font-semibold hover:bg-muted'}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                Explore
              </Link>

              <Link href="/organizations" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${pathname === '/organizations' ? 'bg-primary/10 text-primary font-bold' : 'text-foreground font-semibold hover:bg-muted'}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Organizations
              </Link>
              
              <Link href="/notifications" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${pathname === '/notifications' ? 'bg-primary/10 text-primary font-bold' : 'text-foreground font-semibold hover:bg-muted'}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                Notifications
              </Link>
              
              <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${pathname === '/profile' ? 'bg-primary/10 text-primary font-bold' : 'text-foreground font-semibold hover:bg-muted'}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                Profile
              </Link>
            </div>
            
            <div className="p-4 sm:p-6 border-t border-muted bg-muted/10 flex flex-col gap-3">
              <span className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1 px-1">Account</span>
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 text-center rounded-xl bg-background border border-muted shadow-sm font-bold hover:bg-muted transition-colors text-foreground">Sign In</Link>
              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 text-center rounded-xl bg-foreground text-background font-bold hover:bg-foreground/90 transition-colors shadow-sm">Create Account</Link>
              <div className="my-2 border-t border-muted/50"></div>
              <Link href="/organizations/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-2.5 text-center rounded-xl border border-muted font-semibold hover:bg-muted transition-colors text-muted-foreground text-sm flex items-center justify-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Organization Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
