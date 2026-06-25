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
        category: "Education",
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
        category: "Government",
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
        category: "Updates",
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
        category: "Security",
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
        category: "Tech",
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
    return "bg-muted-foreground/30";
  };

  return (
    <div className="flex lg:gap-8 w-full max-w-[1400px] mx-auto">
      
      {/* 70% Notification Feed */}
      <div className="flex-[0.7] min-w-0 border-x border-muted min-h-screen bg-background pb-12">
        
        {/* Header with Smart Text and Search */}
        <div className="sticky top-[88px] lg:top-0 z-10 bg-background/85 backdrop-blur-xl border-b border-muted pt-6 px-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-black tracking-tight text-foreground leading-tight">Notifications</h1>
              <p className="text-sm text-muted-foreground font-medium mt-1">
                Stay updated with likes, comments, followers, polls, and organization updates.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted-foreground"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Search notifications..." 
                  className="bg-muted/50 border border-transparent focus:border-primary focus:bg-background rounded-full py-2 pl-9 pr-4 text-sm font-medium outline-none transition-all w-[220px]"
                />
              </div>
              <button className="text-sm font-bold text-primary hover:bg-primary/10 px-3 py-2 rounded-full transition-colors whitespace-nowrap">
                Mark all read
              </button>
            </div>
          </div>
          
          {/* AI Smart Summary (Premium) */}
          <div className="bg-gradient-to-r from-primary/10 via-background to-accent/5 rounded-2xl border border-primary/20 p-4 mb-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
               <span className="bg-primary text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider">AI Insight</span>
               <h3 className="font-bold text-foreground text-sm">Today's Highlights</h3>
            </div>
            <ul className="text-sm text-muted-foreground font-medium space-y-1 pl-1">
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary"></span> 5 people liked your content</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500"></span> 2 organizations followed you</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-500"></span> 1 poll received 34 votes</li>
            </ul>
          </div>

          {/* Filter Tabs Row */}
          <div className="flex gap-6 overflow-x-auto hide-scrollbar">
             {tabs.map(tab => (
               <button 
                 key={tab.name}
                 onClick={() => setActiveTab(tab.name)}
                 className={`pb-3 flex items-center gap-2 font-bold text-sm transition-all relative whitespace-nowrap ${
                   activeTab === tab.name 
                     ? "text-foreground" 
                     : "text-muted-foreground hover:text-foreground"
                 }`}
               >
                 {tab.name}
                 <span className={`text-[11px] px-2 py-0.5 rounded-full ${activeTab === tab.name ? 'bg-primary text-white' : 'bg-muted text-muted-foreground group-hover:bg-muted/80'}`}>
                   {tab.count}
                 </span>
                 {activeTab === tab.name && (
                   <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t-full"></div>
                 )}
               </button>
             ))}
          </div>
        </div>

        {/* Timeline Grouped Notifications */}
        <div className="flex flex-col">
          {Object.entries(groupedNotifications).map(([timeGroup, notifs]) => (
            <div key={timeGroup}>
              {/* Timeline Header */}
              <div className="px-6 py-3 bg-muted/20 border-b border-muted">
                <h3 className="text-xs font-black text-muted-foreground uppercase tracking-wider">{timeGroup}</h3>
              </div>
              
              {/* Notification Mini Cards */}
              {notifs.map(notif => (
                <div 
                  key={notif.id} 
                  className={`relative p-5 px-6 border-b border-muted hover:bg-muted/40 cursor-pointer flex gap-4 transition-all duration-300 group ${notif.read ? '' : 'bg-primary/5'}`}
                >
                  {/* Importance Color Bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${getImportanceColor(notif.importance)}`}></div>
                  
                  {/* Avatar & Badge */}
                  <div className="relative shrink-0 mt-1">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-sm border border-muted/20 transition-transform duration-300 group-hover:scale-105 ${
                      notif.avatar.match(/[\up{Emoji}]/u) ? "bg-transparent text-3xl" : notif.color
                    }`}>
                      {notif.avatar}
                    </div>
                    {notif.icon && (
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center border-2 border-background shadow-sm ${notif.color}`}>
                         {notif.icon}
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-0.5">
                    {/* Category Badge */}
                    <div className="mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-md border border-muted">
                        {notif.category}
                      </span>
                    </div>

                    <p className="text-[15px] leading-snug text-foreground/90">
                      <span className="font-bold text-foreground hover:underline mr-1">{notif.user}</span> 
                      {notif.text}
                    </p>
                    
                    {/* Rich Preview Snippet */}
                    {notif.preview && (
                      <div className="mt-2 border border-muted/70 bg-background rounded-lg p-3 shadow-sm group-hover:border-muted transition-colors">
                        <p className="text-sm font-medium text-foreground line-clamp-2">{notif.preview}</p>
                      </div>
                    )}

                    <p className="text-[12px] text-muted-foreground mt-2 font-medium flex items-center gap-1.5">
                       {notif.timeAgo}
                    </p>
                  </div>
                  
                  {/* Actions & Unread */}
                  <div className="shrink-0 flex items-start pt-1 gap-2">
                     <button className="opacity-0 group-hover:opacity-100 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all" title="More options">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                     </button>
                     {!notif.read && (
                       <div className="mt-2.5 w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.6)]"></div>
                     )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* 30% Right Panel */}
      <div className="hidden lg:block flex-[0.3]">
         <NotificationsRightSidebar />
      </div>
    </div>
  );
}
