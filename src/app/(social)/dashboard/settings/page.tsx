export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Workspace Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your organization's profile and global visibility.</p>
      </div>

      <div className="space-y-8">
        {/* Profile Settings */}
        <section className="bg-background border border-muted rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-bold mb-6 border-b border-muted pb-2">Organization Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Workspace Name</label>
              <input type="text" defaultValue="Anna University Workspace" className="w-full px-4 py-3 rounded-xl border border-muted bg-background outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Public Description</label>
              <textarea rows={3} defaultValue="Official data publishing node for Anna University semester results and analytics." className="w-full px-4 py-3 rounded-xl border border-muted bg-background outline-none focus:border-primary transition-colors"></textarea>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90">Save Profile</button>
          </div>
        </section>

        {/* Security & Access */}
        <section className="bg-background border border-muted rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-bold mb-6 border-b border-muted pb-2">Security & Access</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-muted rounded-xl">
              <div>
                <h3 className="font-bold">Global Visibility</h3>
                <p className="text-sm text-muted-foreground">Control if your workspace is listed on the public directory.</p>
              </div>
              <select className="px-4 py-2 border border-muted bg-background rounded-lg outline-none">
                <option>Publicly Listed</option>
                <option>Unlisted (Direct Link)</option>
                <option>Private</option>
              </select>
            </div>
            <div className="flex items-center justify-between p-4 border border-muted rounded-xl">
              <div>
                <h3 className="font-bold">Require Authentication</h3>
                <p className="text-sm text-muted-foreground">Force viewers to log in to search datasets.</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded border-muted text-primary focus:ring-primary" />
            </div>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="border border-danger/30 bg-danger/5 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-danger mb-2">Danger Zone</h2>
          <p className="text-sm text-muted-foreground mb-6">Irreversible destructive actions for this workspace.</p>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold">Delete Workspace</h3>
              <p className="text-sm text-muted-foreground">Permanently delete all datasets, records, and team access.</p>
            </div>
            <button className="px-4 py-2 bg-danger text-white font-semibold rounded-lg hover:bg-danger/90">Delete Workspace</button>
          </div>
        </section>
      </div>
    </div>
  );
}
