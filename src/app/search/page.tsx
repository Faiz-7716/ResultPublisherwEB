import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SearchPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <section className="pt-20 pb-12 border-b border-muted">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Global Search</h1>
          
          {/* Main Search Input */}
          <div className="relative group mx-auto w-full max-w-3xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-background p-2 rounded-xl shadow-sm border border-muted">
              <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground ml-3"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              <input type="text" placeholder="Search datasets, organizations, communities..." autoFocus className="w-full bg-transparent border-none outline-none text-xl p-3 placeholder:text-muted-foreground/50" />
              <button className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors shadow-sm">
                Search
              </button>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
            <button className="text-foreground border-b-2 border-primary pb-2 px-2">All Results (142)</button>
            <button className="text-muted-foreground hover:text-foreground pb-2 px-2 border-b-2 border-transparent hover:border-muted-foreground/30 transition-all">Datasets (89)</button>
            <button className="text-muted-foreground hover:text-foreground pb-2 px-2 border-b-2 border-transparent hover:border-muted-foreground/30 transition-all">Organizations (12)</button>
            <button className="text-muted-foreground hover:text-foreground pb-2 px-2 border-b-2 border-transparent hover:border-muted-foreground/30 transition-all">Discussions (41)</button>
          </div>
        </div>
      </section>

      <section className="flex-1 bg-muted/10 py-12">
        <div className="mx-auto max-w-4xl px-6 space-y-4">
           {/* Mock Results */}
           {[1, 2, 3].map((i) => (
             <div key={i} className="bg-background border border-muted rounded-xl p-5 hover:border-primary/40 transition-colors cursor-pointer">
               <div className="flex items-center gap-2 mb-1">
                 <span className="text-xs uppercase tracking-wider font-semibold text-primary">Dataset</span>
                 <span className="text-muted-foreground text-xs">• Government</span>
               </div>
               <h3 className="text-lg font-bold">2026 Civil Services Final Merit List</h3>
               <p className="text-sm text-muted-foreground mt-2 line-clamp-2">Contains the fully published results and merit rankings of all qualified candidates for the current year, verified via PostgreSQL JSONB generic architecture.</p>
             </div>
           ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
