"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Building2, Server, Users, ShieldCheck, Database, LayoutGrid, 
  ChevronRight, Lock, Key, Eye, Globe, Zap, Network, Briefcase, 
  GraduationCap, Building, Stethoscope, Medal, Scale, Landmark
} from "lucide-react";

export default function OrganizationLandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans selection:bg-primary/20">
      
      {/* LOCAL HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-[#fafafa]/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
             <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-700 text-white font-black text-sm shadow-md group-hover:scale-105 transition-transform duration-300">
                R
             </div>
             <span className="font-extrabold text-lg tracking-tight">ResultHub</span>
             <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest ml-1">Org</span>
          </Link>
          <div className="flex items-center gap-6">
             <Link href="/contact" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">Sales</Link>
             <Link href="/organizations/create" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">Register</Link>
             <Link href="/organizations/login" className="flex items-center gap-2 bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-bold shadow-[0_4px_14px_0_rgb(0,0,0,20%)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:-translate-y-0.5 transition-all duration-200">
               Sign In
               <ChevronRight size={16} />
             </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
        
        {/* Background Mesh/Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#fafafa] to-transparent z-10 pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-20 flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/5 shadow-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-zinc-600 tracking-wide">ResultHub Enterprise is Live</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[84px] font-extrabold tracking-tight leading-[1.05] text-zinc-950 max-w-4xl"
          >
            Manage Results. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">Publish Data.</span> <br className="hidden md:block"/>
            Engage Communities.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg md:text-xl text-zinc-500 max-w-2xl font-medium"
          >
            Empower your organization to publish structured data, manage workspaces, collaborate with teams, and reach millions through one secure platform.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-12"
          >
             <Link href="/organizations/login" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-105 active:scale-95 transition-transform">
               Organization Login
             </Link>
             <Link href="/explore" className="w-full sm:w-auto px-8 py-4 bg-white border border-black/10 text-zinc-900 rounded-2xl font-bold text-lg shadow-sm hover:bg-zinc-50 active:scale-95 transition-all">
               Explore Platform
             </Link>
          </motion.div>

          {/* Animated Ecosystem Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-24 relative w-full max-w-5xl aspect-video border border-black/5 bg-white/50 backdrop-blur-3xl rounded-[40px] shadow-2xl p-8 overflow-hidden flex items-center justify-center"
          >
             {/* Ecosystem Map Mockup */}
             <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
               <motion.path 
                 d="M 200,200 C 400,200 400,400 600,400" 
                 stroke="currentColor" 
                 strokeWidth="2" 
                 fill="none" 
                 strokeDasharray="4 4"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
               />
             </svg>
             <div className="relative flex flex-wrap gap-8 items-center justify-center z-10">
                
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-48 bg-white p-5 rounded-2xl shadow-xl border border-black/5 flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"><Building2 size={20}/></div>
                  <div className="flex flex-col text-left"><span className="text-sm font-bold">Workspace</span><span className="text-[10px] text-zinc-400">Admin Control</span></div>
                </motion.div>

                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="w-48 bg-white p-5 rounded-2xl shadow-xl border border-black/5 flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center"><Database size={20}/></div>
                  <div className="flex flex-col text-left"><span className="text-sm font-bold">Datasets</span><span className="text-[10px] text-zinc-400">Live API</span></div>
                </motion.div>

                <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="w-48 bg-white p-5 rounded-2xl shadow-xl border border-black/5 flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center"><Users size={20}/></div>
                  <div className="flex flex-col text-left"><span className="text-sm font-bold">Community</span><span className="text-[10px] text-zinc-400">1.2M Users</span></div>
                </motion.div>

             </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <section className="py-12 border-y border-black/5 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Trusted by modern organizations globally</p>
        </div>
        <div className="flex w-fit whitespace-nowrap animate-marquee items-center gap-16 md:gap-32 px-8">
           {/* Duplicated for infinite scroll effect */}
           {[...Array(2)].map((_, i) => (
             <div key={i} className="flex items-center gap-16 md:gap-32 text-zinc-300 font-extrabold text-2xl md:text-3xl">
                <span>Schools</span>
                <span>Universities</span>
                <span>Government</span>
                <span>Healthcare</span>
                <span>Businesses</span>
                <span>Sports</span>
                <span>NGOs</span>
             </div>
           ))}
        </div>
      </section>

      {/* SCROLL STORYTELLING */}
      <section className="py-32 max-w-[1200px] mx-auto px-6 flex flex-col gap-32">
        
        {/* Story 1: Workspace */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900 border border-black/5"><Building2 size={24}/></div>
            <h2 className="text-4xl font-extrabold tracking-tight">Enterprise Workspace Management.</h2>
            <p className="text-lg text-zinc-500 font-medium leading-relaxed">
              Model your real-world organization hierarchy. Create departments, assign precise roles, and collaborate securely in isolated environments.
            </p>
          </div>
          <div className="flex-1 w-full relative">
            <div className="bg-zinc-900 p-8 rounded-[32px] shadow-2xl relative overflow-hidden text-white min-h-[300px] flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
              <div className="flex flex-col gap-3 relative z-10 w-full max-w-sm">
                 <motion.div whileHover={{ x: 5 }} className="bg-white/10 backdrop-blur border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center"><Server size={16}/></div>
                   <span className="font-bold">Computer Science Dept</span>
                 </motion.div>
                 <motion.div whileHover={{ x: 5 }} className="bg-white/5 backdrop-blur border border-white/5 p-4 rounded-2xl flex items-center gap-4 ml-8">
                   <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center"><Users size={16}/></div>
                   <span className="font-medium text-zinc-300">Professors (Admin)</span>
                 </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Story 2: Engine */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row-reverse items-center gap-16"
        >
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900 border border-black/5"><Database size={24}/></div>
            <h2 className="text-4xl font-extrabold tracking-tight">Generic Dataset Engine.</h2>
            <p className="text-lg text-zinc-500 font-medium leading-relaxed">
              Push any structured JSON data. Our engine automatically generates dynamic UI, searchable filters, and analytics dashboards with zero configuration.
            </p>
          </div>
          <div className="flex-1 w-full relative">
            <div className="bg-white border border-black/10 p-2 rounded-[32px] shadow-xl min-h-[300px] flex items-center">
              <div className="bg-zinc-50 w-full h-full rounded-[24px] p-6 font-mono text-sm overflow-hidden border border-black/5">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, staggerChildren: 0.1 }}
                >
                  <span className="text-purple-600">const</span> dataset = {'{'} <br/>
                  &nbsp;&nbsp;<span className="text-blue-600">schema</span>: <span className="text-emerald-600">"dynamic"</span>, <br/>
                  &nbsp;&nbsp;<span className="text-blue-600">records</span>: [ <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{'{'} id: <span className="text-emerald-600">"REQ-1"</span>, status: <span className="text-emerald-600">"Live"</span> {'}'}<br/>
                  &nbsp;&nbsp;] <br/>
                  {'}'};
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      {/* SECURITY VAULT SECTION */}
      <section className="bg-zinc-950 text-white py-32 relative overflow-hidden">
        {/* Animated Grid/Rings */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none flex items-center justify-center">
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
             className="w-[800px] h-[800px] border border-white/20 rounded-full"
          ></motion.div>
          <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
             className="absolute w-[600px] h-[600px] border border-white/20 rounded-full border-dashed"
          ></motion.div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto flex items-center justify-center mb-8 border border-white/10 backdrop-blur-xl">
             <ShieldCheck size={32} className="text-white"/>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Enterprise-Grade Security.</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium mb-16">
            Your data is protected by industry-leading security protocols. Designed for governments, hospitals, and financial institutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
             <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
               <Lock className="text-emerald-400 mb-4" size={24}/>
               <h3 className="text-lg font-bold mb-2">Role-Based Access</h3>
               <p className="text-sm text-zinc-400 leading-relaxed">Granular control over who can view, edit, or publish datasets within your workspace.</p>
             </div>
             <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
               <Key className="text-blue-400 mb-4" size={24}/>
               <h3 className="text-lg font-bold mb-2">JWT Authentication</h3>
               <p className="text-sm text-zinc-400 leading-relaxed">Stateless, cryptographically signed tokens ensure every request is authenticated securely.</p>
             </div>
             <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
               <Eye className="text-purple-400 mb-4" size={24}/>
               <h3 className="text-lg font-bold mb-2">Audit Logs</h3>
               <p className="text-sm text-zinc-400 leading-relaxed">Comprehensive tracking of every action taken within your organization's environment.</p>
             </div>
          </div>
        </div>
      </section>

      {/* ORGANIZATION TYPES GRID */}
      <section className="py-32 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-zinc-900">Built for Every Industry.</h2>
            <p className="text-lg text-zinc-500 font-medium">ResultHub scales perfectly whether you are publishing exam results or live medical data.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {[
               { name: "Schools", icon: <Building /> },
               { name: "Universities", icon: <GraduationCap /> },
               { name: "Government", icon: <Landmark /> },
               { name: "Healthcare", icon: <Stethoscope /> },
               { name: "Sports", icon: <Medal /> },
               { name: "Law", icon: <Scale /> },
               { name: "Technology", icon: <Network /> },
               { name: "Business", icon: <Briefcase /> },
             ].map((org, i) => (
               <motion.div 
                 key={org.name}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 whileHover={{ y: -5, scale: 1.02 }}
                 className="p-6 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col items-center justify-center gap-4 text-center group"
               >
                 <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                   {org.icon}
                 </div>
                 <span className="font-bold text-zinc-700 group-hover:text-zinc-900">{org.name}</span>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-white border-t border-black/5 overflow-hidden relative">
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-zinc-900">
            Ready to modernize your organization?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link href="/organizations/login" className="w-full sm:w-auto px-10 py-5 bg-zinc-900 text-white rounded-2xl font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-105 active:scale-95 transition-transform">
               Login as Organization
             </Link>
             <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-zinc-50 border border-black/10 text-zinc-900 rounded-2xl font-bold text-lg hover:bg-zinc-100 active:scale-95 transition-all">
               Request Demo
             </Link>
          </div>
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="bg-[#fafafa] border-t border-black/5 py-12">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-zinc-900 text-white font-black text-[10px]">R</div>
             <span className="font-extrabold tracking-tight text-zinc-900">ResultHub</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-zinc-500">
             <Link href="/developers" className="hover:text-zinc-900 transition-colors">Developers</Link>
             <Link href="/api" className="hover:text-zinc-900 transition-colors">API</Link>
             <Link href="/security" className="hover:text-zinc-900 transition-colors">Security</Link>
             <Link href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy</Link>
             <Link href="/support" className="hover:text-zinc-900 transition-colors">Support</Link>
          </div>
          <div className="text-xs font-medium text-zinc-400">
            © 2026 ResultHub Inc.
          </div>
        </div>
      </footer>

      {/* Global CSS for marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
}
