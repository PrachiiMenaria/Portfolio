"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("loading");
    
    // Construct native mailto link
    const subject = encodeURIComponent(`Letter from ${formData.name}`);
    const body = encodeURIComponent(`From: ${formData.name}\nReturn Address: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:menariaprachi0@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 2000);
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center px-4 pb-4 md:pb-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#3E3634]/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
            className="relative w-full max-w-lg bg-[#FAF5ED] p-8 md:p-12 rounded-t-[2rem] md:rounded-[1rem] shadow-2xl overflow-hidden border border-[#EFE8DD]"
          >
            {/* Paper Texture */}
            <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-text-muted hover:text-highlight transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative z-10">
              <div className="text-center mb-10 border-b border-text/10 pb-6">
                 <h3 className="text-4xl font-display text-text mb-2 tracking-tight">Dear Prachi,</h3>
                 <p className="text-text-muted font-serif italic">I am writing to you regarding...</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your name..." 
                    className="w-full bg-transparent border-b border-text/20 py-2 focus:border-highlight outline-none transition-colors font-serif italic text-text placeholder:text-text-muted/50"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Your email address..." 
                    className="w-full bg-transparent border-b border-text/20 py-2 focus:border-highlight outline-none transition-colors font-serif italic text-text placeholder:text-text-muted/50"
                  />
                </div>
                <div className="relative mt-8">
                  <textarea 
                    id="message" 
                    rows={5} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="I wanted to say..." 
                    className="w-full bg-transparent border border-text/20 rounded-sm p-4 focus:border-highlight outline-none transition-colors font-handwriting text-xl text-text placeholder:text-text-muted/40 resize-none leading-relaxed"
                  />
                  {/* Lined paper effect inside textarea */}
                  <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundSize: '100% 2rem', backgroundImage: 'linear-gradient(transparent 1.9rem, #2D2C2A 2rem)' }} />
                </div>

                <div className="pt-6">
                   <Button type="submit" disabled={status === "loading"} className="w-full gap-2 rounded-sm bg-[#8A5A58] hover:bg-[#A36B69] text-[#FCF9F2] h-14 shadow-md font-serif italic text-lg transition-colors">
                     {status === "loading" ? "Folding Letter..." : "Seal & Send"}
                     {!status && <Send className="w-4 h-4 ml-2" />}
                   </Button>
                </div>
                
                {status === "success" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-highlight font-handwriting text-xl mt-4">
                    Preparing your mail client...
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
