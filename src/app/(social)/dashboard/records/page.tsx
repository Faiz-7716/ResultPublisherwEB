export default function RecordsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Records & Data</h1>
          <p className="text-muted-foreground mt-1">View, search, and manually enter individual JSONB records.</p>
        </div>
        <div className="flex gap-3">
          <select className="px-4 py-2 rounded-lg bg-background border border-muted text-sm font-medium outline-none">
            <option>Nov 2026 Semester Exams</option>
            <option>Revaluation Batch 2</option>
          </select>
          <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm">
            Add Single Record
          </button>
        </div>
      </div>

      <div className="bg-background border border-muted rounded-2xl shadow-sm p-6 mb-8 flex gap-4">
        <input type="text" placeholder="Search by Register Number..." className="flex-1 px-4 py-2 rounded-lg border border-muted bg-background outline-none focus:border-primary" />
        <input type="text" placeholder="Search by Date of Birth..." className="flex-1 px-4 py-2 rounded-lg border border-muted bg-background outline-none focus:border-primary" />
        <button className="px-6 py-2 rounded-lg bg-foreground text-background font-semibold hover:bg-foreground/90">Search</button>
      </div>

      <div className="bg-background border border-muted rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6">
           <h3 className="text-lg font-bold mb-4">Manual JSONB Entry</h3>
           <div className="bg-muted/20 border border-muted rounded-xl p-4 font-mono text-sm text-muted-foreground h-48 overflow-y-auto">
             {`{
  "register_number": "81001234",
  "name": "Jane Doe",
  "dob": "2002-05-14",
  "department": "Computer Science",
  "subjects": {
    "CS101": { "grade": "O", "credits": 4 },
    "CS102": { "grade": "A+", "credits": 4 }
  },
  "cgpa": 9.4
}`}
           </div>
           <div className="mt-4 flex justify-end">
             <button className="px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90">Save Record</button>
           </div>
        </div>
      </div>
    </div>
  );
}
