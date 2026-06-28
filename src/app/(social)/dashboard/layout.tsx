import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-muted/10 text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-background border-r border-muted flex flex-col flex-shrink-0 sticky top-0 h-screen overflow-y-auto">
        <div className="p-6 border-b border-muted">
          <h2 className="text-xl font-bold tracking-tight text-primary">ResultHub Console</h2>
          <p className="text-xs text-muted-foreground mt-1">Workspace ID: ws_84920k</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3 pt-4">Core</div>
          <Link href="/dashboard" className="flex items-center px-3 py-2.5 rounded-xl hover:bg-muted text-sm font-medium transition-colors">
            Overview
          </Link>
          <Link href="/dashboard/datasets" className="flex items-center px-3 py-2.5 rounded-xl hover:bg-muted text-sm font-medium transition-colors">
            Datasets
          </Link>
          <Link href="/dashboard/records" className="flex items-center px-3 py-2.5 rounded-xl hover:bg-muted text-sm font-medium transition-colors">
            Records & Data
          </Link>
          
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3 pt-6">Ingestion</div>
          <Link href="/dashboard/import" className="flex items-center px-3 py-2.5 rounded-xl hover:bg-muted text-sm font-medium transition-colors text-accent">
            Import CSV/Excel
          </Link>

          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3 pt-6">Management</div>
          <Link href="/dashboard/team" className="flex items-center px-3 py-2.5 rounded-xl hover:bg-muted text-sm font-medium transition-colors">
            Team Access
          </Link>
          <Link href="/dashboard/settings" className="flex items-center px-3 py-2.5 rounded-xl hover:bg-muted text-sm font-medium transition-colors">
            Workspace Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-muted">
          <Link href="/" className="flex items-center justify-center w-full py-2 rounded-lg bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors">
            Return to Public Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-background border-b border-muted flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">AU</div>
             <span className="font-semibold">Anna University Workspace</span>
          </div>
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Log out
          </button>
        </header>
        <div className="p-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
