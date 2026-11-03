import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { serviceItems, translations } from '../data/portfolioData';
import { 
  Monitor,
  Database,
  FileSpreadsheet,
  Lightbulb,
  GitBranch,
  Users,
  Clock,
  Rocket,
  ChevronRight, 
  Sparkles,
  CheckCircle,
  Wrench
} from 'lucide-react';

interface ServicesProps {
  language: Language;
}

export const ServicesSection: React.FC<ServicesProps> = ({ language }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(serviceItems[0].id);
  const t = translations[language].services;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Monitor': return <Monitor className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6" />;
      case 'Lightbulb': return <Lightbulb className="w-6 h-6" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Clock': return <Clock className="w-6 h-6" />;
      case 'Rocket': return <Rocket className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  const activeService = serviceItems.find(s => s.id === selectedServiceId) || serviceItems[0];

  return (
    <section id="services" className="py-20 bg-slate-950/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-orange-400 bg-orange-950/60 px-3 py-1 rounded-full border border-orange-500/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              {t.subtitle}
            </p>
          </div>

          <div className="text-xs text-slate-400 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800 shadow-lg shrink-0">
            <span className="font-semibold text-emerald-400">{serviceItems.length} Bidang Keahlian</span>
            <span className="mx-2 text-slate-600">·</span>
            <span className="text-slate-300">Mahasiswa Sistem Informasi</span>
          </div>
        </div>

        {/* 8-Card Grid (4 Columns on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((item, index) => {
            const isSelected = item.id === selectedServiceId;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedServiceId(item.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900/90 border-2 border-orange-500 shadow-xl shadow-orange-500/10 -translate-y-1'
                    : 'bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 shadow-lg'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-gradient-to-tr from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30'
                        : 'bg-slate-800 text-orange-400 border border-slate-700/80'
                    }`}>
                      {getIcon(item.iconName)}
                    </div>
                    <span className="text-xs font-bold text-slate-500">
                      {`0${index + 1}`}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`font-heading text-lg font-bold mb-2.5 transition-colors ${
                    isSelected ? 'text-orange-400' : 'text-white'
                  }`}>
                    {language === 'id' ? item.titleId : item.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {language === 'id' ? item.descId : item.descEn}
                  </p>
                </div>

                {/* Bottom preview info */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Wrench className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.tools.slice(0, 3).join(', ')}</span>
                  </div>
                  <span className={`text-xs font-semibold flex items-center gap-1 ${
                    isSelected ? 'text-orange-400' : 'text-slate-500'
                  }`}>
                    {isSelected ? 'Terpilih' : 'Detail'}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service Detailed Deliverables Panel */}
        <div className="mt-10 bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-800/90 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/25">
                {getIcon(activeService.iconName)}
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-orange-400">
                  {language === 'id' ? 'Detail Kompetensi & Hasil Kerja' : 'Detailed Competency & Deliverables'}
                </span>
                <h3 className="font-heading text-xl font-bold text-white">
                  {language === 'id' ? activeService.titleId : activeService.titleEn}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-medium mr-1">{t.toolsHeader}</span>
              {activeService.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700/80 rounded-lg"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {t.deliverablesHeader}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(language === 'id' ? activeService.deliverablesId : activeService.deliverablesEn).map((deliv, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/90 flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-300 leading-snug">
                    {deliv}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
