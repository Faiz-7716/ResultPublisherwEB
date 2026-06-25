import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function OrganizationLoginPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-6 bg-muted/10">
        <div className="w-full max-w-md bg-background rounded-3xl p-8 border border-muted shadow-sm">
          <div className="text-center mb-8">
            <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight mb-2">Organization Portal</h1>
            <p className="text-sm text-muted-foreground">Sign in to manage datasets and publish results securely.</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="email">Work Email</label>
              <input 
                id="email" 
                type="email" 
                className="w-full px-4 py-2.5 rounded-xl border border-muted bg-background outline-none focus:border-primary transition-colors text-sm" 
                placeholder="admin@institution.edu" 
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
              <input 
                id="password" 
                type="password" 
                className="w-full px-4 py-2.5 rounded-xl border border-muted bg-background outline-none focus:border-primary transition-colors text-sm" 
                placeholder="••••••••" 
              />
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="rounded border-muted w-4 h-4 text-primary focus:ring-primary" />
                Remember me
              </label>
              <Link href="/forgot-password" className="text-sm font-medium text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            <button type="button" className="w-full mt-6 py-3 rounded-xl bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors">
              Access Dashboard
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground border-t border-muted pt-6">
            Is your organization new to ResultHub?{' '}
            <Link href="/organizations/create" className="font-semibold text-primary hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
