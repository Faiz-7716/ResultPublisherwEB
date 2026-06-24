"use client";

import RightSidebar from "@/components/feed/RightSidebar";

export default function NotificationsPage() {
  const notifications = [
    { id: 1, type: "LIKE", user: "Ravi Kumar", text: "liked your post about Anna University.", timeAgo: "10m ago", read: false },
    { id: 2, type: "REPLY", user: "Maha Krishnan", text: "replied to your poll: 'Yes, absolutely'.", timeAgo: "1h ago", read: false },
    { id: 3, type: "ALERT", user: "System", text: "New Dataset 'TNPSC Group 4' published.", timeAgo: "3h ago", read: true },
    { id: 4, type: "FOLLOW", user: "Alex User", text: "started following you.", timeAgo: "1d ago", read: true },
  ];

  return (
    <div className="flex lg:gap-12 w-full">
      <div className="flex-1 max-w-2xl min-w-0 border-x border-muted min-h-screen bg-background">
        <div className="sticky top-[88px] lg:top-0 z-10 bg-background/80 backdrop-blur-md border-b border-muted p-4 px-6 flex items-center">
          <h1 className="text-xl font-bold">Notifications</h1>
        </div>
        <div className="flex flex-col">
          {notifications.map(notif => (
            <div key={notif.id} className={`p-4 px-6 border-b border-muted hover:bg-muted/30 cursor-pointer flex gap-4 transition-colors ${notif.read ? 'opacity-70' : 'bg-primary/5'}`}>
              <div className="mt-1">
                {notif.type === "LIKE" && <span className="text-pink-500 text-2xl">❤️</span>}
                {notif.type === "REPLY" && <span className="text-blue-500 text-2xl">💬</span>}
                {notif.type === "ALERT" && <span className="text-amber-500 text-2xl">🔔</span>}
                {notif.type === "FOLLOW" && <span className="text-emerald-500 text-2xl">👤</span>}
              </div>
              <div>
                <p className="text-[15px]"><span className="font-bold">{notif.user}</span> {notif.text}</p>
                <p className="text-sm text-muted-foreground mt-1">{notif.timeAgo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Sidebar */}
      <div className="hidden lg:block w-[350px]">
         <RightSidebar />
      </div>
    </div>
  );
}
