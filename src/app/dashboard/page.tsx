"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, Plus, Upload, Users, BarChart3, Database, 
  TrendingUp, TrendingDown, Clock, Search, FolderKanban,
  MoreVertical, FileText, ArrowRight, Zap, Target, Shield,
  Award, RefreshCw, Calendar as CalendarIcon, MessageSquare, 
  ThumbsUp, Share2, Sparkles, Server, HardDrive, Wifi, Key,
  ExternalLink, ChevronRight, Activity
} from "lucide-react";
import Link from "next/link";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function DashboardPage() {
  return (
    <div className="max-w-[1600px] mx-auto w-full pb-20">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-8">
        
        {/* HERO SECTION */}
        <motion.div variants={item} className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 bg-white border border-zinc-200/80 rounded-[24px] p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#635BFF]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight mb-2">
              Welcome back, <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-600">Government Polytechnic College</span>
            </h1>
            <div className="flex items-center gap-4 text-sm font-medium mb-4">
              <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                <CheckCircle2 size={14} /> Verified Organization
              </span>
              <span className="text-zinc-500 flex items-center gap-1.5">
                <Clock size={14} /> Last published: 2 hours ago
              </span>
            </div>
            <p className="text-zinc-600 max-w-2xl text-sm leading-relaxed">
              Manage your institution's academic results, student datasets, and public announcements. Your data is currently reaching over 12,000 active students and alumni.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 relative z-10 shrink-0">
             <button className="flex items-center gap-2 text-sm font-semibold text-zinc-700 bg-white border border-zinc-200 px-4 py-2 rounded-xl shadow-sm hover:bg-zinc-50 hover:border-zinc-300 transition-all">
               <Upload size={16} /> Upload CSV
             </button>
             <button className="flex items-center gap-2 text-sm font-semibold text-zinc-700 bg-white border border-zinc-200 px-4 py-2 rounded-xl shadow-sm hover:bg-zinc-50 hover:border-zinc-300 transition-all">
               <FolderKanban size={16} /> Create Workspace
             </button>
             <button className="flex items-center gap-2 text-sm font-bold text-white bg-[#635BFF] hover:bg-[#5249E5] px-5 py-2 rounded-xl shadow-sm shadow-[#635BFF]/20 hover:shadow-md hover:-translate-y-0.5 transition-all">
               <Plus size={16} /> Publish Dataset
             </button>
          </div>
        </motion.div>

        {/* KPI CARDS */}
        <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { label: "Total Datasets", value: "142", trend: "+12%", up: true, icon: Database, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Total Records", value: "1.2M", trend: "+8.4%", up: true, icon: FileText, color: "text-[#635BFF]", bg: "bg-[#635BFF]/10" },
            { label: "Today's Views", value: "24.5k", trend: "+24%", up: true, icon: Activity, color: "text-emerald-600", bg: "bg-emerald-50" },
            { label: "Followers", value: "8,439", trend: "+142", up: true, icon: Users, color: "text-orange-600", bg: "bg-orange-50" },
            { label: "Storage Used", value: "64%", trend: "Stable", up: true, icon: HardDrive, color: "text-zinc-600", bg: "bg-zinc-100" }
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-zinc-200/80 p-5 rounded-[20px] shadow-sm hover:shadow-md hover:border-zinc-300 transition-all group relative overflow-hidden">
               <div className="absolute right-0 bottom-0 opacity-0 group-hover:opacity-5 translate-y-4 group-hover:translate-y-0 transition-all duration-500 pointer-events-none">
                 <stat.icon size={80} />
               </div>
               <div className="flex justify-between items-start mb-4">
                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                   <stat.icon size={20} />
                 </div>
                 <div className={`flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-md ${stat.up ? 'text-emerald-700 bg-emerald-50' : 'text-red-700 bg-red-50'}`}>
                   {stat.up ? <TrendingUp size={12}/> : <TrendingDown size={12}/>} {stat.trend}
                 </div>
               </div>
               <div>
                 <div className="text-2xl font-black text-zinc-900 mb-1">{stat.value}</div>
                 <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{stat.label}</div>
               </div>
            </div>
          ))}
        </motion.div>

        {/* THREE COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT & CENTER COLUMNS (Span 8) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* ANALYTICS CHART */}
            <motion.div variants={item} className="bg-white border border-zinc-200/80 rounded-[24px] p-6 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">Dataset Views</h3>
                  <p className="text-sm text-zinc-500">Last 30 days performance</p>
                </div>
                <select className="bg-zinc-50 border border-zinc-200 text-sm font-semibold rounded-lg px-3 py-1.5 outline-none focus:border-[#635BFF]">
                  <option>Last 30 Days</option>
                  <option>Last 7 Days</option>
                  <option>This Year</option>
                </select>
              </div>
              
              {/* Fake Chart CSS Bars */}
              <div className="h-64 flex items-end justify-between gap-2 px-2">
                {[40, 25, 60, 80, 50, 70, 90, 45, 65, 85, 30, 55, 75, 100, 60].map((h, i) => (
                  <div key={i} className="w-full relative group">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                      {h}k views
                    </div>
                    <motion.div 
                      initial={{ height: 0 }} 
                      animate={{ height: `${h}%` }} 
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className={`w-full rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer ${i === 13 ? 'bg-[#635BFF]' : 'bg-zinc-200 group-hover:bg-[#635BFF]/40'}`}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs font-semibold text-zinc-400 mt-4 px-2">
                <span>Jun 1</span>
                <span>Jun 15</span>
                <span>Jun 30</span>
              </div>
            </motion.div>

            {/* WORKSPACES & DATASETS ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
               {/* WORKSPACES */}
               <motion.div variants={item} className="flex flex-col gap-4">
                 <div className="flex justify-between items-center px-1">
                   <h3 className="text-lg font-bold text-zinc-900">Workspaces</h3>
                   <button className="text-sm font-semibold text-[#635BFF] hover:underline">View All</button>
                 </div>
                 {[
                   { name: "Engineering Dept", sets: 12, status: "Active", color: "bg-emerald-500" },
                   { name: "Medical Sciences", sets: 4, status: "Draft", color: "bg-amber-500" },
                   { name: "Arts & Humanities", sets: 8, status: "Active", color: "bg-emerald-500" }
                 ].map((ws, i) => (
                   <div key={i} className="bg-white border border-zinc-200/80 p-4 rounded-[20px] shadow-sm hover:shadow-md hover:border-[#635BFF]/30 transition-all cursor-pointer group">
                     <div className="flex justify-between items-start mb-3">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 group-hover:text-[#635BFF] group-hover:bg-[#635BFF]/5 transition-colors">
                           <FolderKanban size={20} />
                         </div>
                         <div>
                           <h4 className="font-bold text-zinc-900">{ws.name}</h4>
                           <p className="text-xs font-medium text-zinc-500">{ws.sets} Datasets</p>
                         </div>
                       </div>
                       <button className="text-zinc-300 hover:text-zinc-900"><MoreVertical size={16}/></button>
                     </div>
                     <div className="flex items-center justify-between text-xs font-semibold">
                       <span className="flex items-center gap-1.5 text-zinc-500">
                         <span className={`w-2 h-2 rounded-full ${ws.color}`}></span> {ws.status}
                       </span>
                       <span className="text-zinc-400">Updated 2d ago</span>
                     </div>
                   </div>
                 ))}
               </motion.div>

               {/* QUICK PUBLISH PANEL */}
               <motion.div variants={item} className="flex flex-col gap-4">
                 <div className="flex justify-between items-center px-1">
                   <h3 className="text-lg font-bold text-zinc-900">Quick Actions</h3>
                 </div>
                 <div className="bg-white border border-zinc-200/80 p-5 rounded-[20px] shadow-sm flex flex-col gap-3">
                    <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 group transition-colors border border-transparent hover:border-zinc-200 text-left">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center"><Upload size={16}/></div>
                        <div>
                          <div className="text-sm font-bold text-zinc-900">Upload CSV Data</div>
                          <div className="text-xs font-medium text-zinc-500">Import bulk records instantly</div>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                    </button>
                    
                    <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 group transition-colors border border-transparent hover:border-zinc-200 text-left">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><BarChart3 size={16}/></div>
                        <div>
                          <div className="text-sm font-bold text-zinc-900">Create Poll</div>
                          <div className="text-xs font-medium text-zinc-500">Gather student feedback</div>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                    </button>

                    <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 group transition-colors border border-transparent hover:border-zinc-200 text-left">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center"><MessageSquare size={16}/></div>
                        <div>
                          <div className="text-sm font-bold text-zinc-900">Publish Announcement</div>
                          <div className="text-xs font-medium text-zinc-500">Broadcast to all followers</div>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                    </button>
                 </div>

                 {/* AI SUGGESTION */}
                 <div className="bg-gradient-to-br from-indigo-900 to-[#635BFF] p-5 rounded-[20px] text-white shadow-lg shadow-[#635BFF]/20 relative overflow-hidden">
                   <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                   <div className="flex items-center gap-2 text-indigo-200 text-xs font-black uppercase tracking-widest mb-3">
                     <Sparkles size={14} /> ResultHub AI
                   </div>
                   <p className="text-sm font-medium leading-relaxed mb-4">
                     Your "Sem 8 Results" dataset has high engagement. Try publishing placement statistics to boost SEO and follower growth.
                   </p>
                   <button className="w-full py-2 bg-white text-[#635BFF] rounded-lg text-sm font-bold shadow-sm hover:bg-zinc-50 transition-colors">
                     Generate Summary Draft
                   </button>
                 </div>
               </motion.div>

            </div>

            {/* RECENT DATASETS TABLE */}
            <motion.div variants={item} className="bg-white border border-zinc-200/80 rounded-[24px] overflow-hidden shadow-sm">
              <div className="p-6 border-b border-zinc-100 flex justify-between items-center">
                 <h3 className="text-lg font-bold text-zinc-900">Recent Datasets</h3>
                 <button className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-200">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-zinc-50/50 text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      <th className="p-4 font-semibold">Dataset Name</th>
                      <th className="p-4 font-semibold">Workspace</th>
                      <th className="p-4 font-semibold">Status</th>
                      <th className="p-4 font-semibold">Views</th>
                      <th className="p-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {[
                      { name: "2026 Semester 8 Final Results", ws: "Engineering Dept", status: "Published", views: "12.4k", sColor: "bg-emerald-100 text-emerald-700" },
                      { name: "Alumni Placement Stats 2025", ws: "Public Relations", status: "Draft", views: "-", sColor: "bg-amber-100 text-amber-700" },
                      { name: "Q1 Entrance Exam Scores", ws: "Admissions", status: "Archived", views: "45.2k", sColor: "bg-zinc-100 text-zinc-700" },
                      { name: "Civil Services Mock Test 4", ws: "Engineering Dept", status: "Published", views: "3.2k", sColor: "bg-emerald-100 text-emerald-700" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-zinc-50/50 transition-colors group">
                        <td className="p-4">
                          <div className="font-bold text-sm text-zinc-900">{row.name}</div>
                          <div className="text-xs text-zinc-500 mt-0.5">Updated 2h ago</div>
                        </td>
                        <td className="p-4 text-sm font-medium text-zinc-600">{row.ws}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 text-[11px] font-bold rounded-md ${row.sColor}`}>{row.status}</span>
                        </td>
                        <td className="p-4 text-sm font-medium text-zinc-600">{row.views}</td>
                        <td className="p-4 text-right">
                          <button className="p-1.5 text-zinc-400 hover:text-[#635BFF] hover:bg-[#635BFF]/10 rounded-md transition-colors"><ExternalLink size={16} /></button>
                          <button className="p-1.5 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors ml-1"><MoreVertical size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* ORGANIZATION PERFORMANCE */}
            <motion.div variants={item} className="bg-white border border-zinc-200/80 rounded-[24px] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 mb-6">Performance Score</h3>
              
              <div className="flex justify-center mb-8 relative">
                <div className="w-32 h-32 rounded-full border-8 border-zinc-100 flex items-center justify-center relative">
                  <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="46" fill="transparent" stroke="#635BFF" strokeWidth="8" strokeDasharray="289" strokeDashoffset="40" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(99,91,255,0.4)]" />
                  </svg>
                  <div className="text-center">
                    <div className="text-3xl font-black text-zinc-900">92</div>
                    <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-1">Excellent</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Data Quality Score", value: "98/100", icon: Target },
                  { label: "Search Ranking (SEO)", value: "Top 5%", icon: Search },
                  { label: "Community Engagement", value: "High", icon: ThumbsUp },
                  { label: "Data Freshness", value: "Real-time", icon: Zap }
                ].map((metric, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-semibold text-zinc-600">
                      <metric.icon size={14} className="text-zinc-400" /> {metric.label}
                    </div>
                    <span className="text-sm font-bold text-zinc-900">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RECENT ACTIVITY TIMELINE */}
            <motion.div variants={item} className="bg-white border border-zinc-200/80 rounded-[24px] p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-zinc-900">Activity Timeline</h3>
                <button className="text-zinc-400 hover:text-zinc-900"><MoreVertical size={16}/></button>
              </div>
              
              <div className="relative border-l-2 border-zinc-100 ml-3 space-y-6">
                {[
                  { title: "Published Dataset", desc: "2026 Semester 8 Final Results", time: "2 hours ago", icon: Database, color: "bg-blue-50 text-blue-600" },
                  { title: "Team Member Joined", desc: "Dr. Ananya Sharma joined as Editor", time: "5 hours ago", icon: Users, color: "bg-emerald-50 text-emerald-600" },
                  { title: "CSV Import Completed", desc: "Imported 12,400 records successfully", time: "Yesterday, 4:30 PM", icon: Upload, color: "bg-purple-50 text-purple-600" },
                  { title: "Workspace Created", desc: "Public Relations workspace initialized", time: "2 days ago", icon: FolderKanban, color: "bg-orange-50 text-orange-600" }
                ].map((act, i) => (
                  <div key={i} className="relative pl-6">
                    <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center ${act.color}`}>
                      <act.icon size={12} />
                    </div>
                    <div className="text-sm font-bold text-zinc-900 mb-0.5">{act.title}</div>
                    <div className="text-xs font-medium text-zinc-500 mb-1">{act.desc}</div>
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{act.time}</div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-bold text-zinc-600 hover:bg-zinc-100 transition-colors">
                View Full Logs
              </button>
            </motion.div>

            {/* TEAM MEMBERS */}
            <motion.div variants={item} className="bg-white border border-zinc-200/80 rounded-[24px] p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2"><Users size={18} className="text-[#635BFF]"/> Team Members</h3>
                <button className="text-xs font-bold text-[#635BFF] bg-[#635BFF]/10 px-2 py-1 rounded-md hover:bg-[#635BFF]/20 transition-colors">Invite</button>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "Dr. Rajesh Kumar", role: "Owner", initial: "RK", online: true },
                  { name: "Admin Office", role: "Admin", initial: "AO", online: true },
                  { name: "Dr. Ananya Sharma", role: "Editor", initial: "AS", online: false },
                  { name: "IT Support", role: "Viewer", initial: "IT", online: false }
                ].map((user, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-bold text-zinc-600">
                          {user.initial}
                        </div>
                        {user.online && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-zinc-900 group-hover:text-[#635BFF] transition-colors">{user.name}</div>
                        <div className="text-[11px] font-semibold text-zinc-500">{user.role}</div>
                      </div>
                    </div>
                    <button className="text-zinc-300 opacity-0 group-hover:opacity-100 hover:text-zinc-600 transition-all"><MoreVertical size={16}/></button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CALENDAR & SCHEDULE */}
            <motion.div variants={item} className="bg-white border border-zinc-200/80 rounded-[24px] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2"><CalendarIcon size={18} className="text-orange-500"/> Schedule</h3>
              <div className="space-y-4">
                <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                   <div className="text-xs font-bold text-orange-600 mb-1">Today, 2:00 PM</div>
                   <div className="text-sm font-bold text-zinc-900">Auto-publish: Q1 Entrance Scores</div>
                </div>
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                   <div className="text-xs font-bold text-zinc-500 mb-1">Tomorrow, 10:00 AM</div>
                   <div className="text-sm font-bold text-zinc-900">CSV Bulk Import Schedule</div>
                </div>
              </div>
            </motion.div>

            {/* API USAGE CARD */}
            <motion.div variants={item} className="bg-zinc-900 rounded-[24px] p-6 shadow-sm text-white">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2"><Key size={18} className="text-zinc-400"/> API Usage</h3>
                <span className="text-xs font-bold bg-zinc-800 px-2 py-1 rounded-md text-emerald-400">99.9% Success</span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-xs font-semibold text-zinc-400 mb-2">
                  <span>Bandwidth (Pro Plan)</span>
                  <span>450k / 1M Req</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[45%] rounded-full"></div>
                </div>
              </div>
              <button className="w-full py-2.5 rounded-xl bg-white text-zinc-900 text-sm font-bold hover:bg-zinc-100 transition-colors">
                Manage API Keys
              </button>
            </motion.div>

          </div>

        </div>

      </motion.div>

      {/* DASHBOARD FOOTER */}
      <footer className="mt-16 pt-8 border-t border-zinc-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-semibold text-zinc-500">
        <div className="flex items-center gap-6">
          <Link href="/help" className="hover:text-zinc-900 transition-colors">Need Help?</Link>
          <Link href="/docs" className="hover:text-zinc-900 transition-colors">Documentation</Link>
          <Link href="/community" className="hover:text-zinc-900 transition-colors">Community</Link>
          <Link href="/api-docs" className="hover:text-zinc-900 transition-colors">API Docs</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-zinc-900 transition-colors">Terms</Link>
          <span className="px-2 py-1 bg-zinc-100 rounded-md text-xs font-bold">v2.4.1</span>
        </div>
      </footer>
    </div>
  );
}
