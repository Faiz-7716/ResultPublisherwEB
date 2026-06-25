"use client";

import { useState } from "react";
import RightSidebar from "@/components/feed/RightSidebar";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Mentions", "Alerts"];

  const notifications = [
    { id: 1, type: "LIKE", user: "Ravi Kumar", text: "liked your post about Anna University Results.", timeAgo: "10m ago", read: false, avatar: "R", color: "bg-pink-500", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> },
    { id: 2, type: "REPLY", user: "Maha Krishnan", text: "replied to your poll: 'Yes, absolutely, I agree with this'.", timeAgo: "1h ago", read: false, avatar: "M", color: "bg-blue-500", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> },
    { id: 3, type: "ALERT", user: "System", text: "New Premium Dataset 'TNPSC Group 4 Analysis' was published.", timeAgo: "3h ago", read: true, avatar: "S", color: "bg-amber-500", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> },
    { id: 4, type: "FOLLOW", user: "Anna University", text: "started following you.", timeAgo: "1d ago", read: true, avatar: "A", color: "bg-emerald-500", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> },
    { id: 5, type: "LIKE", user: "Priya V", text: "liked your comment.", timeAgo: "2d ago", read: true, avatar: "P", color: "bg-pink-500", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> },
  ];

  return (
    <div className="flex lg:gap-12 w-full">
      <div className="flex-1 max-w-2xl min-w-0 border-x border-muted min-h-screen bg-background">
        
        {/* Header */}
        <div className="sticky top-[88px] lg:top-0 z-10 bg-background/85 backdrop-blur-xl border-b border-muted flex flex-col pt-4">
          <div className="px-6 flex items-center justify-between pb-4">
            <h1 className="text-2xl font-black tracking-tight text-foreground">Notifications</h1>
            <button className="text-sm font-bold text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-colors">
              Mark all as read
            </button>
          </div>
          
          {/* Tabs */}
          <div className="flex px-6 gap-8">
             {tabs.map(tab => (
               <button 
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`pb-3 font-bold text-[15px] transition-all relative ${
                   activeTab === tab 
                     ? "text-foreground" 
                     : "text-muted-foreground hover:text-foreground"
                 }`}
               >
                 {tab}
                 {activeTab === tab && (
                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full"></div>
                 )}
               </button>
             ))}
          </div>
        </div>

        {/* Notifications List */}
        <div className="flex flex-col">
          {notifications.map(notif => (
            <div 
              key={notif.id} 
              className={`p-5 px-6 border-b border-muted hover:bg-muted/40 cursor-pointer flex gap-4 transition-all duration-300 group ${notif.read ? '' : 'bg-primary/5'}`}
            >
              {/* Avatar & Badge */}
              <div className="relative shrink-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-sm border border-muted/20 transition-transform duration-300 group-hover:scale-105 ${
                  notif.avatar === "S" ? "bg-slate-800" :
                  notif.avatar === "A" ? "bg-blue-600" :
                  notif.avatar === "M" ? "bg-purple-600" :
                  notif.avatar === "P" ? "bg-teal-500" :
                  "bg-orange-500"
                }`}>
                  {notif.avatar}
                </div>
                <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center border-2 border-background shadow-sm ${notif.color}`}>
                   {notif.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-1">
                <p className="text-[15px] leading-snug text-foreground/90">
                  <span className="font-bold text-foreground hover:underline mr-1">{notif.user}</span> 
                  {notif.text}
                </p>
                <p className="text-[13px] text-muted-foreground mt-1.5 font-medium flex items-center gap-1.5">
                   {notif.timeAgo}
                </p>
              </div>
              
              {/* Unread Indicator & Actions */}
              <div className="shrink-0 flex items-center gap-3">
                 <button className="opacity-0 group-hover:opacity-100 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all" title="More options">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                 </button>
                 {!notif.read && (
                   <div className="w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.6)]"></div>
                 )}
              </div>
            </div>
          ))}
        </div>
        
        {/* End of notifications */}
        <div className="p-8 text-center text-muted-foreground font-medium text-sm border-b border-muted">
          You've caught up on all notifications!
        </div>

      </div>
      
      {/* Right Sidebar */}
      <div className="hidden lg:block w-[350px]">
         <RightSidebar />
      </div>
    </div>
  );
}
