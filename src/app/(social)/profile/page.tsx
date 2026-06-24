export default function ProfilePage() {
  return (
      <div className="mx-auto max-w-3xl px-4 py-6 w-full">
        
        {/* Profile Header */}
        <div className="bg-background rounded-2xl shadow-sm border border-muted overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-primary to-accent"></div>
          <div className="px-8 pb-8 relative">
             <div className="w-24 h-24 rounded-full bg-background border-4 border-background -mt-12 flex items-center justify-center shadow-sm relative z-10 overflow-hidden">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/40"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
             </div>
             <div className="flex justify-between items-end mt-4">
               <div>
                 <h1 className="text-2xl font-black">Alex User</h1>
                 <p className="text-muted-foreground font-medium">@alex_user</p>
               </div>
               <button className="px-5 py-2 border border-muted rounded-full font-bold text-sm hover:bg-muted/30 transition-colors">
                 Edit Profile
               </button>
             </div>
             <div className="flex gap-6 mt-6">
               <div className="flex flex-col">
                 <span className="font-black text-xl">12</span>
                 <span className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Posts</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-black text-xl">14K</span>
                 <span className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Upvotes</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-black text-xl">4</span>
                 <span className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Saved Records</span>
               </div>
             </div>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="bg-background rounded-2xl shadow-sm border border-muted">
           <div className="flex border-b border-muted">
             <button className="flex-1 py-4 text-sm font-bold text-primary border-b-2 border-primary">My Posts</button>
             <button className="flex-1 py-4 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">Saved Records</button>
             <button className="flex-1 py-4 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">Settings</button>
           </div>
           
           <div className="p-12 text-center flex flex-col items-center">
             <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mb-5 text-foreground/40">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
             </div>
             <h3 className="font-black text-xl tracking-tight">No posts yet</h3>
             <p className="text-sm text-muted-foreground mt-2 mb-8 max-w-sm">When you post complaints, polls, or start discussions, they will appear here on your profile.</p>
             <button className="bg-foreground text-background font-bold py-2.5 px-8 rounded-full hover:opacity-90 transition-opacity">
               Create Post
             </button>
           </div>
        </div>

      </div>
  );
}
