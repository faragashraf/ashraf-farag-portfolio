import { Component } from '@angular/core';

import { AboutSection } from './components/about-section/about-section';
import { CertificationsSection } from './components/certifications-section/certifications-section';
import { ContactSection } from './components/contact-section/contact-section';
import { ExperienceSection } from './components/experience-section/experience-section';
import { ExpertiseSection } from './components/expertise-section/expertise-section';
import { HeroSection } from './components/hero-section/hero-section';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { TechSection } from './components/tech-section/tech-section';
import { WorkSection } from './components/work-section/work-section';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeader,
    HeroSection,
    AboutSection,
    ExpertiseSection,
    WorkSection,
    TechSection,
    CertificationsSection,
    ExperienceSection,
    ContactSection,
    SiteFooter
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
