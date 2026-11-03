import React from 'react';
import { Language, ProfileData } from '../types';
import { translations } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Instagram, MessageCircle, Heart } from 'lucide-react';

interface FooterProps {
  language: Language;
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ language, profile }) => {
  const t = translations[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060A12] border-t border-slate-800/90 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 via-amber-500 to-emerald-400 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-orange-500/20">
              {profile.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
            </div>
            <div>
              <span className="font-heading font-extrabold text-white tracking-tight text-sm uppercase">
                {profile.name}
              </span>
              <p className="text-[11px] text-slate-400">
                {profile.major} · {profile.university}
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 font-medium">
            <a href="#home" className="hover:text-orange-400 transition-colors">Beranda</a>
            <a href="#about" className="hover:text-orange-400 transition-colors">Tentang</a>
            <a href="#services" className="hover:text-orange-400 transition-colors">Keahlian</a>
            <a href="#projects" className="hover:text-orange-400 transition-colors">Proyek</a>
            <a href="#experience" className="hover:text-orange-400 transition-colors">Pengalaman</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Kontak</a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 transition-colors cursor-pointer shadow-xs"
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-orange-400" />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>
            © {new Date().getFullYear()} {profile.name}. {t.rights}
          </p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>{t.designedFor}</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
