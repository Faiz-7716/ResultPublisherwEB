import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="flex-1 flex items-center justify-center py-12 px-6 bg-muted/20">
        <div className="w-full max-w-md bg-background rounded-3xl p-8 border border-muted shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Create an account</h1>
            <p className="text-sm text-muted-foreground">Join the public data ecosystem today.</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
               <div>
                 <label className="block text-sm font-semibold mb-2" htmlFor="firstName">First name</label>
                 <input 
                   id="firstName" 
                   type="text" 
                   className="w-full px-4 py-2.5 rounded-xl border border-muted bg-background outline-none focus:border-primary transition-colors text-sm" 
                 />
               </div>
               <div>
                 <label className="block text-sm font-semibold mb-2" htmlFor="lastName">Last name</label>
                 <input 
                   id="lastName" 
                   type="text" 
                   className="w-full px-4 py-2.5 rounded-xl border border-muted bg-background outline-none focus:border-primary transition-colors text-sm" 
                 />
               </div>
            </div>
            
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

            <button type="button" className="w-full mt-6 py-3 rounded-xl bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors">
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground px-4">
            By clicking continue, you agree to our{' '}
            <Link href="/terms" className="underline hover:text-foreground">Terms of Service</Link> and{' '}
            <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>.
          </p>

          <div className="mt-8 pt-6 border-t border-muted text-center">
             <p className="text-sm text-muted-foreground">
               Already have an account?{' '}
               <Link href="/login" className="font-semibold text-foreground hover:text-primary">
                 Sign in
               </Link>
             </p>
          </div>
        </div>
      </div>
    </main>
  );
}
