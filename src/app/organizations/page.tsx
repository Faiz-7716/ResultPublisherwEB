import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function OrganizationsPage() {
  const orgs = [
    { name: "Stanford University", type: "Education", datasets: 142, verified: true },
    { name: "Ministry of Education", type: "Government", datasets: 89, verified: true },
    { name: "Apex Tournaments", type: "Sports", datasets: 34, verified: false },
    { name: "World Bank", type: "Finance", datasets: 412, verified: true },
    { name: "City Council", type: "Hyper Local", datasets: 12, verified: true },
    { name: "TechCrunch", type: "Technology", datasets: 56, verified: false },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">

      <section className="bg-foreground text-background py-16">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">Featured Organizations</h1>
            <p className="text-lg text-muted max-w-2xl">
              Over 4,500 institutions use ResultHub to publish structured data. Explore verified publishers and their public datasets.
            </p>
          </div>
          <Link href="/organizations/create" className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-all flex-shrink-0">
            Register Organization
          </Link>
        </div>
      </section>

      <section className="py-16 mx-auto max-w-7xl px-6 w-full flex-1">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12">
           <div className="relative w-full max-w-md">
             <input type="text" placeholder="Filter organizations..." className="w-full bg-background border border-muted rounded-xl px-4 py-2.5 outline-none focus:border-primary text-sm shadow-sm" />
           </div>
           <div className="flex gap-2">
             <select className="text-sm bg-background border border-muted rounded-xl px-4 py-2.5 outline-none focus:border-primary shadow-sm">
               <option>All Types</option>
               <option>Education</option>
               <option>Government</option>
             </select>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orgs.map((org, i) => (
            <div key={i} className="p-6 rounded-2xl border border-muted bg-background hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-xl flex items-center justify-center text-2xl font-bold bg-muted text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  {org.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg">{org.name}</h3>
                    {org.verified && (
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-success"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{org.type}</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-muted flex items-center justify-between text-sm">
                <span className="font-semibold">{org.datasets} Published Datasets</span>
                <span className="text-primary group-hover:translate-x-1 transition-transform">View &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
