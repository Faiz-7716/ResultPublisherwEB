import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CreateOrganizationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <div className="flex-1 py-16 px-6 bg-muted/10 border-b border-muted">
        <div className="mx-auto max-w-3xl bg-background rounded-3xl p-8 md:p-12 border border-muted shadow-sm">
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Register your Organization</h1>
            <p className="text-muted-foreground">Get verified and start publishing datasets globally on ResultHub.</p>
          </div>

          <form className="space-y-8">
            {/* Step 1 */}
            <section>
              <h2 className="text-xl font-semibold border-b border-muted pb-2 mb-6">1. Organization Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Organization Name</label>
                  <input type="text" placeholder="e.g. Stanford University" className="w-full px-4 py-3 rounded-xl border border-muted bg-background outline-none focus:border-primary transition-colors" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Primary Domain</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-muted bg-background outline-none focus:border-primary transition-colors">
                      <option>Education</option>
                      <option>Government</option>
                      <option>Sports</option>
                      <option>Finance</option>
                      <option>Technology</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Official Website</label>
                    <input type="url" placeholder="https://" className="w-full px-4 py-3 rounded-xl border border-muted bg-background outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
              </div>
            </section>

            {/* Step 2 */}
            <section>
              <h2 className="text-xl font-semibold border-b border-muted pb-2 mb-6">2. Administrative Contact</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-muted bg-background outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Work Email (Must match domain)</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-muted bg-background outline-none focus:border-primary transition-colors" />
                </div>
              </div>
            </section>

            <div className="pt-6">
              <button type="button" className="w-full md:w-auto px-8 py-3 rounded-xl bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors">
                Submit Registration Request
              </button>
              <p className="mt-4 text-xs text-muted-foreground">
                Your request will be manually verified by our team within 24-48 hours before publishing rights are granted.
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
