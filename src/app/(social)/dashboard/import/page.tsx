export default function ImportPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Bulk Import Center</h1>
        <p className="text-muted-foreground mt-1">Upload CSV or Excel files to automatically generate thousands of JSONB records.</p>
      </div>

      <div className="bg-background border border-muted rounded-2xl shadow-sm p-8">
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Target Dataset</label>
          <select className="w-full px-4 py-3 rounded-xl border border-muted bg-background outline-none focus:border-primary transition-colors">
            <option>Select a dataset to append records...</option>
            <option>Nov 2026 Semester Exams</option>
            <option>Revaluation Batch 2</option>
          </select>
        </div>

        <div className="border-2 border-dashed border-muted rounded-2xl p-12 text-center hover:bg-muted/10 transition-colors cursor-pointer mb-6">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 1V10.5M7.5 1L4.5 4M7.5 1L10.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <h3 className="text-lg font-bold mb-2">Drag & Drop your CSV/Excel here</h3>
          <p className="text-sm text-muted-foreground">Supported formats: .csv, .xlsx, .xls (Max 50MB per upload)</p>
        </div>

        <div className="bg-warning/10 border border-warning/20 rounded-xl p-4 flex gap-4 text-warning-foreground">
          <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5"><path fillRule="evenodd" clipRule="evenodd" d="M7.5 0.877014L1.13408 11.954C0.751322 12.6186 1.23075 13.4477 1.99849 13.4477H13.0015C13.7692 13.4477 14.2487 12.6186 13.8659 11.954L7.5 0.877014ZM7.49988 4.25043C7.81054 4.25043 8.06238 4.50227 8.06238 4.81293V8.81293C8.06238 9.12359 7.81054 9.37543 7.49988 9.37543C7.18922 9.37543 6.93738 9.12359 6.93738 8.81293V4.81293C6.93738 4.50227 7.18922 4.25043 7.49988 4.25043ZM8.24988 11.2504C8.24988 11.6646 7.91409 12.0004 7.49988 12.0004C7.08566 12.0004 6.74988 11.6646 6.74988 11.2504C6.74988 10.8362 7.08566 10.5004 7.49988 10.5004C7.91409 10.5004 8.24988 10.8362 8.24988 11.2504Z" fill="currentColor"/></svg>
          <div className="text-sm">
            <strong>Data Validation Step:</strong> Once uploaded, our engine will parse the columns and allow you to map them to Search Keys (Dynamic Search Inputs) before committing to the live database.
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button className="px-6 py-2.5 rounded-xl border border-muted bg-background font-semibold hover:bg-muted/50 transition-colors">Cancel</button>
          <button className="px-6 py-2.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow">Upload & Map Data</button>
        </div>
      </div>
    </div>
  );
}
