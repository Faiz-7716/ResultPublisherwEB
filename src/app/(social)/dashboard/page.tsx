export default function DashboardOverviewPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Workspace Overview</h1>
          <p className="text-muted-foreground mt-1">Welcome back. Here is your organization's telemetry.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-background border border-muted text-sm font-medium hover:bg-muted/50 transition-colors">
            Download Report
          </button>
          <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm">
            Create Dataset
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Datasets", value: "14", trend: "+2 this month" },
          { label: "Total Records", value: "120,432", trend: "+4,500 this week" },
          { label: "Searches Today", value: "24,591", trend: "High traffic" },
          { label: "Active Viewers", value: "1,204", trend: "Live now" },
        ].map((kpi, i) => (
          <div key={i} className="p-6 rounded-2xl bg-background border border-muted shadow-sm">
            <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">{kpi.label}</h3>
            <div className="text-3xl font-extrabold mb-1">{kpi.value}</div>
            <div className="text-sm text-success font-medium">{kpi.trend}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-6 rounded-2xl bg-background border border-muted shadow-sm">
          <h2 className="text-xl font-bold mb-6">Recent Datasets</h2>
          <div className="space-y-4">
            {[
              { name: "Nov 2026 Semester Exams", type: "Public Searchable", records: "84,000", status: "Published" },
              { name: "Revaluation Batch 2", type: "Public Searchable", records: "1,240", status: "Published" },
              { name: "Internal Faculty Review", type: "Password Protected", records: "450", status: "Draft" },
            ].map((ds, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-muted hover:border-primary/50 transition-colors cursor-pointer">
                <div>
                  <h3 className="font-bold">{ds.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-semibold px-2 py-0.5 bg-muted rounded">{ds.type}</span>
                    <span className="text-xs text-muted-foreground">• {ds.records} Records</span>
                  </div>
                </div>
                <div className={`text-xs font-bold px-2 py-1 rounded ${ds.status === 'Published' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
                  {ds.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-primary text-white shadow-sm">
            <h2 className="text-lg font-bold mb-2">Need to publish results?</h2>
            <p className="text-sm text-primary-foreground/80 mb-6">Upload your structured CSV directly. We will auto-generate the search endpoints for you.</p>
            <button className="w-full py-2.5 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-colors">
              Import CSV Now
            </button>
          </div>
          
          <div className="p-6 rounded-2xl bg-background border border-muted shadow-sm">
            <h2 className="text-lg font-bold mb-4">Storage Usage</h2>
            <div className="mb-2 flex justify-between text-sm font-medium">
              <span>JSONB Index Storage</span>
              <span>4.2 GB / 10 GB</span>
            </div>
            <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-accent w-[42%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
