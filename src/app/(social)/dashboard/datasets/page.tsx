export default function DatasetsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dataset Management</h1>
          <p className="text-muted-foreground mt-1">Create and configure JSONB datasets for your workspace.</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm">
          + New Dataset
        </button>
      </div>

      <div className="bg-background border border-muted rounded-2xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-5 bg-muted/30 p-4 text-sm font-semibold text-muted-foreground border-b border-muted">
          <div className="col-span-2">Dataset Name</div>
          <div>Type</div>
          <div>Records</div>
          <div className="text-right">Actions</div>
        </div>
        
        <div className="divide-y divide-muted">
          {[
            { name: "Nov 2026 Semester Exams", type: "Public Searchable", records: "84,000" },
            { name: "Revaluation Batch 2", type: "Public Searchable", records: "1,240" },
            { name: "Internal Faculty Review", type: "Password Protected", records: "450" },
            { name: "Scholarship Applicants", type: "Private Internal", records: "2,100" },
          ].map((ds, i) => (
            <div key={i} className="grid grid-cols-5 p-4 items-center text-sm hover:bg-muted/10 transition-colors">
              <div className="col-span-2 font-bold text-foreground">{ds.name}</div>
              <div>
                <span className="px-2 py-1 bg-muted rounded text-xs font-semibold">{ds.type}</span>
              </div>
              <div className="text-muted-foreground font-medium">{ds.records}</div>
              <div className="text-right space-x-3 text-primary font-semibold">
                <button className="hover:underline">Edit</button>
                <button className="hover:underline">Mapping</button>
                <button className="text-danger hover:underline">Archive</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
