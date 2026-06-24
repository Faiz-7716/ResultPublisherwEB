"use client";

import { useState } from "react";

type PostType = "UPDATE" | "COMPLAINT" | "POLL";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: PostType;
}

export default function CreatePostModal({ isOpen, onClose, defaultType = "UPDATE" }: CreatePostModalProps) {
  const [activeTab, setActiveTab] = useState<PostType>(defaultType);
  const [pollOptions, setPollOptions] = useState(["", ""]);

  if (!isOpen) return null;

  const handleAddOption = () => {
    if (pollOptions.length < 5) {
      setPollOptions([...pollOptions, ""]);
    }
  };

  const handleRemoveOption = (index: number) => {
    if (pollOptions.length > 2) {
      const newOptions = [...pollOptions];
      newOptions.splice(index, 1);
      setPollOptions(newOptions);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/20 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="bg-background w-full max-w-[600px] rounded-2xl shadow-2xl border border-muted flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-muted">
          <h2 className="text-xl font-bold text-foreground">Create a post</h2>
          <button onClick={onClose} className="p-2 -mr-2 text-muted-foreground hover:bg-muted rounded-full transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Profile Section */}
        <div className="px-6 py-4 flex gap-4 items-center">
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0 text-xl">
            A
          </div>
          <div>
            <h4 className="font-bold text-lg text-foreground leading-tight mb-1">Alex User</h4>
            <button className="flex items-center gap-1 border border-muted rounded-full px-3 py-1.5 text-sm font-semibold hover:bg-muted transition-colors text-foreground">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
               Anyone
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="px-6 py-2 overflow-y-auto flex-1 hide-scrollbar">
           
            {/* Text Area (Common to all) */}
            <textarea 
              placeholder={
                activeTab === "UPDATE" ? "What do you want to talk about?" :
                activeTab === "COMPLAINT" ? "Describe the issue in detail..." :
                "Ask a question..."
              }
              className="w-full resize-none bg-transparent border-none outline-none text-xl placeholder:text-muted-foreground min-h-[140px] text-foreground"
            />

            {/* Complaint Specific Fields */}
            {activeTab === "COMPLAINT" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-top-2 mb-4">
                <div className="flex items-center gap-3 border border-muted rounded-xl px-4 py-3 bg-muted/30 focus-within:border-primary focus-within:bg-background transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-500"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <input type="text" placeholder="Add location (e.g. OMR Road, Chennai)" className="bg-transparent border-none outline-none flex-1 text-base font-medium text-foreground" />
                </div>
                <div className="border-2 border-dashed border-muted-foreground/30 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/30 transition-colors">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground mb-3"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  <span className="text-base font-bold text-foreground">Add Photo/Video Evidence</span>
                  <span className="text-sm text-muted-foreground mt-1">Drag and drop or click to upload</span>
                </div>
              </div>
            )}

            {/* Poll Specific Fields */}
            {activeTab === "POLL" && (
              <div className="space-y-3 animate-in fade-in slide-in-from-top-2 border border-muted rounded-xl p-5 mb-4 bg-muted/10">
                <h4 className="font-bold text-foreground mb-2">Poll Options</h4>
                {pollOptions.map((opt, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <div className="flex-1 flex items-center border border-muted rounded-xl px-4 py-3 bg-background focus-within:border-accent">
                      <input 
                        type="text" 
                        placeholder={`Option ${i + 1}`} 
                        value={opt}
                        onChange={(e) => {
                          const newOpts = [...pollOptions];
                          newOpts[i] = e.target.value;
                          setPollOptions(newOpts);
                        }}
                        className="bg-transparent border-none outline-none w-full text-base font-medium text-foreground" 
                      />
                    </div>
                    {i >= 2 && (
                      <button onClick={() => handleRemoveOption(i)} className="p-3 text-danger hover:bg-danger/10 rounded-full transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </button>
                    )}
                  </div>
                ))}
                {pollOptions.length < 5 && (
                  <button onClick={handleAddOption} className="text-accent font-bold text-sm flex items-center gap-1.5 hover:underline mt-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Add Option
                  </button>
                )}
                
                <div className="border-t border-muted pt-4 mt-5 flex items-center justify-between">
                   <span className="text-base font-semibold text-foreground">Poll Duration</span>
                   <select className="bg-background border border-muted px-4 py-2 rounded-xl text-base font-bold outline-none cursor-pointer text-foreground hover:bg-muted/50 transition-colors">
                     <option>1 Day</option>
                     <option>3 Days</option>
                     <option>7 Days</option>
                   </select>
                </div>
              </div>
            )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 px-6 flex items-center justify-between">
           <div className="flex gap-2">
             <button 
                onClick={() => setActiveTab("UPDATE")}
                className={`p-3 rounded-full transition-colors ${activeTab === "UPDATE" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}
                title="Standard Update"
             >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
             </button>
             <button 
                onClick={() => setActiveTab("COMPLAINT")}
                className={`p-3 rounded-full transition-colors ${activeTab === "COMPLAINT" ? "bg-amber-500/10 text-amber-600" : "text-muted-foreground hover:bg-muted"}`}
                title="File a Complaint"
             >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
             </button>
             <button 
                onClick={() => setActiveTab("POLL")}
                className={`p-3 rounded-full transition-colors ${activeTab === "POLL" ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-muted"}`}
                title="Create a Poll"
             >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
             </button>
             <div className="w-px h-8 bg-muted mx-1 self-center"></div>
             <button className="p-3 text-muted-foreground hover:bg-muted rounded-full transition-colors" title="Add Media">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
             </button>
           </div>
           
           <button 
             onClick={onClose}
             className="px-6 py-2.5 rounded-full font-bold text-white bg-foreground hover:bg-foreground/90 transition-all active:scale-95 shadow-sm"
           >
             Post
           </button>
        </div>

      </div>
    </div>
  );
}
