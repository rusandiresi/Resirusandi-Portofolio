/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { initialProfileData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [language, setLanguage] = useState<Language>('id');
  const profile = initialProfileData;
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100 antialiased selection:bg-orange-500 selection:text-white relative overflow-x-hidden">
      {/* Ambient background mesh light orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-Right Vibrant Warm Solar Flare (Hero area) */}
        <div className="absolute -top-32 right-0 w-[550px] h-[550px] bg-gradient-to-br from-orange-500/15 via-amber-500/10 to-transparent rounded-full blur-3xl" />
        
        {/* Top-Left Modern Indigo / Electric Blue ambient bloom */}
        <div className="absolute top-20 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/15 via-blue-600/10 to-transparent rounded-full blur-3xl" />

        {/* Center-Left Emerald Glow (UNIKMA almamater & Systems stability) */}
        <div className="absolute top-[35%] -left-40 w-[500px] h-[500px] bg-gradient-to-r from-emerald-600/12 via-teal-600/8 to-transparent rounded-full blur-3xl" />

        {/* Center-Right Cyan / Azure Data Glow (Projects Showcase) */}
        <div className="absolute top-[60%] -right-40 w-[600px] h-[600px] bg-gradient-to-l from-cyan-600/12 via-indigo-600/10 to-transparent rounded-full blur-3xl" />

        {/* Bottom Warm Contact Accent Bloom */}
        <div className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-t from-orange-600/15 via-amber-600/8 to-transparent rounded-full blur-3xl" />

        {/* Fine technical grid texture across the entire background */}
        <div className="absolute inset-0 bg-tech-grid opacity-35" />
      </div>

      {/* Top Navbar */}
      <div className="relative z-40">
        <Navbar
          language={language}
          onLanguageChange={setLanguage}
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {/* Hero Section matching the reference layout */}
        <Hero
          language={language}
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* About Section: Academic credentials & 4 Pillars of Information Systems */}
        <AboutSection
          language={language}
          profile={profile}
        />

        {/* Services & Core Competencies: BPMN, Database, Web, UI/UX, BI */}
        <ServicesSection
          language={language}
        />

        {/* Projects Showcase & Case Studies with Interactive Modal */}
        <ProjectsSection
          language={language}
        />

        {/* Academic Journey & Work / Org Experience Timeline */}
        <ExperienceEducationSection
          language={language}
        />

        {/* Industry Certifications & Credentials Verification */}
        <CertificationsSection
          language={language}
        />

        {/* Skills Matrix & Toolchains */}
        <SkillsMatrix
          language={language}
        />

        {/* Contact Form & Direct Coordinates (WhatsApp & Email copy) */}
        <ContactSection
          language={language}
          profile={profile}
        />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        profile={profile}
      />

      {/* ATS Printable Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        language={language}
        profile={profile}
      />
    </div>
  );
}
