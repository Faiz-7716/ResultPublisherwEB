import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-6 bg-muted/20">
        <div className="w-full max-w-md bg-background rounded-3xl p-8 border border-muted shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Sign in to your ResultHub account to continue.</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="email">Email address</label>
              <input 
                id="email" 
                type="email" 
                className="w-full px-4 py-2.5 rounded-xl border border-muted bg-background outline-none focus:border-primary transition-colors text-sm" 
                placeholder="name@organization.edu" 
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

            <button type="button" className="w-full mt-6 py-3 rounded-xl bg-foreground text-background font-semibold shadow hover:bg-foreground/90 transition-colors">
              Sign In
            </button>
          </form>

          <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground before:h-px before:flex-1 before:bg-muted after:h-px after:flex-1 after:bg-muted">
            OR CONTINUE WITH
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 border border-muted rounded-xl hover:bg-muted/50 transition-colors text-sm font-medium">
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 border border-muted rounded-xl hover:bg-muted/50 transition-colors text-sm font-medium">
              GitHub
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link href="/signup" className="font-semibold text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
