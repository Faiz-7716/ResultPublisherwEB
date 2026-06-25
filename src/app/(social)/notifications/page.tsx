"use client";

import { useState } from "react";
import NotificationsRightSidebar from "@/components/feed/NotificationsRightSidebar";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { name: "All", count: 126 },
    { name: "Mentions", count: 8 },
    { name: "Alerts", count: 24 },
    { name: "Likes", count: 56 },
    { name: "Follows", count: 17 }
  ];

  // Grouped Timeline Mock Data
  const groupedNotifications = {
    "Today": [
      { 
        id: 1, 
        type: "LIKE_GROUP", 
        user: "Ravi Kumar and 24 others", 
        text: "liked your post", 
        timeAgo: "10m ago", 
        read: false, 
        importance: "Normal",
        category: "EDUCATION",
        categoryColor: "bg-blue-500",
        preview: "TNPSC Result Analysis",
        avatar: "❤️", 
        color: "bg-pink-500", 
        icon: null
      },
      { 
        id: 2, 
        type: "ALERT", 
        user: "System", 
        text: "New Dataset Published", 
        timeAgo: "1h ago", 
        read: false, 
        importance: "Important",
        category: "GOVERNMENT",
        categoryColor: "bg-emerald-500",
        preview: "TNPSC Group 4 Analysis • 23,456 Records",
        avatar: "📊", 
        color: "bg-amber-500", 
        icon: null
      }
    ],
    "Yesterday": [
      { 
        id: 3, 
        type: "FOLLOW_GROUP", 
        user: "Anna University and 2 others", 
        text: "started following you.", 
        timeAgo: "Yesterday", 
        read: true, 
        importance: "Normal",
        category: "BUSINESS",
        categoryColor: "bg-amber-500",
        preview: null,
        avatar: "A", 
        color: "bg-blue-600", 
        icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      },
      { 
        id: 4, 
        type: "SECURITY", 
        user: "Security Alert", 
        text: "New login detected from Chennai.", 
        timeAgo: "Yesterday", 
        read: true, 
        importance: "Critical",
        category: "TECHNOLOGY",
        categoryColor: "bg-purple-500",
        preview: null,
        avatar: "🔴", 
        color: "bg-red-500", 
        icon: null
      }
    ],
    "This Week": [
      { 
        id: 5, 
        type: "REPLY", 
        user: "Maha Krishnan", 
        text: "replied to your poll", 
        timeAgo: "3d ago", 
        read: true, 
        importance: "Normal",
        category: "POLITICS",
        categoryColor: "bg-red-500",
        preview: "'Yes, absolutely, I agree with this'",
        avatar: "M", 
        color: "bg-purple-600", 
        icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      }
    ]
  };

  const getImportanceColor = (level: string) => {
    if (level === "Critical") return "bg-red-500";
    if (level === "Important") return "bg-purple-500";
    return "bg-transparent";
  };

  return (
    <div className="flex w-full">
      
      {/* 65% Notification Feed */}
      <div className="w-[65%] shrink-0 min-w-0 border-x border-muted min-h-screen bg-background pb-12">
        
        {/* Header (Single Unified Row) */}
        <div className="sticky top-[88px] lg:top-0 z-10 bg-background/85 backdrop-blur-xl border-b border-muted pt-5 px-6 pb-4">
          <div className="flex items-center justify-between gap-4 mb-4">
            
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold tracking-tight text-foreground">Notifications</h1>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                126 unread updates
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-2.5 flex items-center pointer-events-none">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted-foreground"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Search notifications..." 
                  className="bg-muted/30 border border-muted focus:border-primary focus:bg-background rounded-lg py-1.5 pl-8 pr-3 text-[13px] font-medium outline-none transition-all w-[180px] h-8"
                />
              </div>
              <button className="text-[13px] font-semibold text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-1.5 rounded-lg transition-colors h-8 flex items-center whitespace-nowrap">
                Mark all read
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </button>
            </div>
          </div>
          
          {/* AI Smart Summary (Compact) */}
          <div className="bg-gradient-to-r from-primary/[0.08] via-background to-background rounded-[14px] border border-primary/20 p-3 mb-5 shadow-sm flex items-center justify-between overflow-hidden relative">
            <div className="flex items-center gap-4 relative z-10">
               <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold uppercase px-2 py-0.5 rounded-md tracking-wider">Today's Highlights</span>
               <div className="flex items-center gap-4 text-[13px] font-semibold text-foreground/80">
                  <span className="flex items-center gap-1.5"><span className="text-pink-500">❤️</span> 5 new likes</span>
                  <span className="flex items-center gap-1.5"><span className="text-emerald-500">👥</span> 2 new followers</span>
                  <span className="flex items-center gap-1.5"><span className="text-blue-500">📊</span> 1 poll received 34 votes</span>
               </div>
            </div>
            <button className="text-xs font-bold text-primary hover:underline relative z-10">View details</button>
          </div>

          {/* Segmented Control Tabs */}
          <div className="flex gap-1 bg-muted/40 p-1 rounded-[10px] overflow-x-auto hide-scrollbar w-fit border border-muted/50">
             {tabs.map(tab => (
               <button 
                 key={tab.name}
                 onClick={() => setActiveTab(tab.name)}
                 className={`px-4 py-1.5 flex items-center gap-1.5 font-semibold text-[13px] transition-all rounded-md whitespace-nowrap ${
                   activeTab === tab.name 
                     ? "bg-primary text-white shadow-sm" 
                     : "text-muted-foreground hover:text-foreground hover:bg-muted"
                 }`}
               >
                 {tab.name}
                 <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === tab.name ? 'bg-white/20 text-white' : 'bg-muted-foreground/10 text-muted-foreground'}`}>
                   {tab.count}
                 </span>
               </button>
             ))}
          </div>
        </div>

        {/* Timeline Grouped Notifications */}
        <div className="flex flex-col">
          {Object.entries(groupedNotifications).map(([timeGroup, notifs]) => (
            <div key={timeGroup}>
              {/* Timeline Sticky Header */}
              <div className="sticky top-[210px] lg:top-[122px] z-10 px-6 py-2 bg-background/95 backdrop-blur-md border-b border-muted">
                <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">{timeGroup}</h3>
              </div>
              
              {/* Notification Mini Cards */}
              {notifs.map(notif => (
                <div 
                  key={notif.id} 
                  className={`relative p-4 px-6 border-b border-muted/50 hover:bg-muted/20 cursor-pointer flex gap-4 transition-all duration-200 group ${notif.read ? '' : 'bg-primary/5'}`}
                >
                  {/* Importance Color Indicator */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${getImportanceColor(notif.importance)}`}></div>
                  
                  {/* Avatar & Badge */}
                  <div className="relative shrink-0 mt-0.5">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base text-white shadow-sm border border-muted/20 transition-transform duration-200 group-hover:scale-105 ${
                      notif.avatar.match(/[^\x00-\x7F]/) ? "bg-transparent text-2xl" : notif.color
                    }`}>
                      {notif.avatar}
                    </div>
                    {notif.icon && (
                      <div className={`absolute -bottom-1 -right-1 w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-background shadow-sm ${notif.color}`}>
                         {notif.icon}
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* Title Row */}
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[9px] font-black uppercase tracking-widest ${notif.categoryColor.replace('bg-', 'text-')}`}>
                            {notif.category}
                          </span>
                        </div>

                        <p className="text-[14px] leading-snug font-semibold text-foreground">
                          {notif.user} <span className="font-normal text-muted-foreground">{notif.text}</span>
                        </p>
                        
                        {/* Rich Preview Snippet */}
                        {notif.preview && (
                          <div className="mt-1.5">
                            <p className="text-[13px] font-normal text-foreground/90 line-clamp-2">{notif.preview}</p>
                          </div>
                        )}
                        
                        <p className="text-[12px] text-muted-foreground mt-1.5 font-medium flex items-center gap-1.5">
                           {notif.timeAgo}
                        </p>
                      </div>

                      {/* Right Side Actions & Unread */}
                      <div className="shrink-0 flex items-center gap-2">
                         {/* Hover Actions */}
                         <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/80 backdrop-blur-sm border border-muted shadow-sm rounded-lg overflow-hidden">
                           <button className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border-r border-muted" title="Mark read">
                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                           </button>
                           <button className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border-r border-muted" title="Archive">
                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>
                           </button>
                           <button className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" title="More">
                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                           </button>
                         </div>
                         
                         {/* Unread Indicator */}
                         {!notif.read && (
                           <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.6)] ml-2"></div>
                         )}
                      </div>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* 22% Right Panel (Adjusted using flex-1 with a fixed minimum equivalent) */}
      <div className="hidden xl:block w-[35%] pl-8">
         <NotificationsRightSidebar />
      </div>
    </div>
  );
}
