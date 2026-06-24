import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function ExplorePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <section className="border-b border-muted bg-muted/20 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Explore Results</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Browse through millions of published records. Filter by domain, organization, or specific metrics.
          </p>
        </div>
      </section>

      <section className="flex-1 mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row gap-12 w-full">
        {/* Filter Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Domain Filters</h3>
            <ul className="space-y-3 text-sm">
              {['Education', 'Government', 'Sports', 'Politics', 'Finance'].map((d) => (
                <li key={d} className="flex items-center gap-3">
                  <input type="checkbox" className="rounded border-muted w-4 h-4 text-primary focus:ring-primary" />
                  <label>{d}</label>
                </li>
              ))}
              <li className="text-primary font-medium hover:underline cursor-pointer">Show 6 more...</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Date Range</h3>
            <div className="space-y-3 text-sm">
              <label className="flex items-center gap-3">
                <input type="radio" name="date" className="text-primary focus:ring-primary w-4 h-4" defaultChecked /> Any time
              </label>
              <label className="flex items-center gap-3">
                <input type="radio" name="date" className="text-primary focus:ring-primary w-4 h-4" /> Past 24 hours
              </label>
              <label className="flex items-center gap-3">
                <input type="radio" name="date" className="text-primary focus:ring-primary w-4 h-4" /> Past week
              </label>
              <label className="flex items-center gap-3">
                <input type="radio" name="date" className="text-primary focus:ring-primary w-4 h-4" /> Past month
              </label>
            </div>
          </div>
        </aside>

        {/* Results Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">Showing 1,024,532 results</p>
            <select className="text-sm bg-transparent border border-muted rounded-md px-3 py-1.5 outline-none focus:border-primary">
              <option>Sort by: Newest</option>
              <option>Sort by: Most Viewed</option>
              <option>Sort by: Relevance</option>
            </select>
          </div>

          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="p-6 rounded-2xl border border-muted bg-background hover:shadow-md transition-all cursor-pointer group">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-md uppercase tracking-wider">Education</span>
                      <span className="text-xs text-muted-foreground">• Stanford University</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Class of 2026 CS Midterm Distribution</h2>
                    <p className="text-sm text-muted-foreground mb-4">Complete anonymized dataset of CS101 midterm scores containing grade curves, demographic breakdowns, and historical comparisons.</p>
                  </div>
                  <div className="hidden sm:flex flex-col items-end text-xs text-muted-foreground">
                    <span>2 hrs ago</span>
                    <span className="mt-1 bg-muted px-2 py-0.5 rounded">JSONB</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm font-medium">
                  <span className="flex items-center gap-2 text-success">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5V7.08579L10.8536 9.93934C11.0488 10.1346 11.0488 10.4512 10.8536 10.6464C10.6583 10.8417 10.3417 10.8417 10.1464 10.6464L7.14645 7.64645C7.05268 7.55268 7 7.42548 7 7.29289V2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path><path d="M14 7.5C14 11.0899 11.0899 14 7.5 14C3.91015 14 1 11.0899 1 7.5C1 3.91015 3.91015 1 7.5 1C11.0899 1 14 3.91015 14 7.5ZM13 7.5C13 10.5376 10.5376 13 7.5 13C4.46243 13 2 10.5376 2 7.5C2 4.46243 4.46243 2 7.5 2C10.5376 2 13 4.46243 13 7.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    Live Updates Active
                  </span>
                  <span className="text-muted-foreground flex items-center gap-2">
                    👁️ 14.2k
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="px-6 py-2 rounded-full border border-muted hover:bg-muted/50 text-sm font-semibold transition-colors">
              Load More Results
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
