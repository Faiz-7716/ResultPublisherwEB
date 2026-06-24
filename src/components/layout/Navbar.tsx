"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
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

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-muted bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-4">
          <div className="flex items-center gap-4">
            {/* Hamburger Button (Mobile only) */}
            <button 
              className="lg:hidden p-2 -ml-2 text-foreground hover:bg-muted rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm sm:text-base">
                R
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight hidden sm:block">ResultHub</span>
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/search" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-2 rounded-full hover:bg-muted/80 transition-colors">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              Search data...
            </Link>
            
            <div className="hidden sm:flex items-center gap-4">
              <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
                Sign In
              </Link>
              <Link href="/signup" className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors shadow-sm">
                Create Organization
              </Link>
            </div>
            
            {/* Mobile simplified actions */}
            <Link href="/login" className="sm:hidden text-sm font-bold text-foreground bg-muted px-4 py-2 rounded-full">
              Log In
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className="absolute top-0 left-0 bottom-0 w-[280px] bg-background border-r border-muted shadow-2xl animate-in slide-in-from-left duration-300 flex flex-col">
            <div className="p-4 border-b border-muted flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold">
                  R
                </div>
                <span className="text-xl font-bold tracking-tight">ResultHub</span>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-foreground hover:bg-muted rounded-full transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-2">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-bold hover:bg-muted rounded-xl transition-colors">Home</Link>
              <Link href="/explore" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-bold hover:bg-muted rounded-xl transition-colors">Explore</Link>
              <Link href="/notifications" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-bold hover:bg-muted rounded-xl transition-colors">Notifications</Link>
              <Link href="/bookmarks" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-bold hover:bg-muted rounded-xl transition-colors">Bookmarks</Link>
              <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-bold hover:bg-muted rounded-xl transition-colors">Profile</Link>
            </div>
            
            <div className="p-4 border-t border-muted flex flex-col gap-3">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 text-center rounded-xl border border-muted font-bold hover:bg-muted transition-colors">Sign In</Link>
              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 text-center rounded-xl bg-foreground text-background font-bold hover:bg-foreground/90 transition-colors">Create Organization</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
