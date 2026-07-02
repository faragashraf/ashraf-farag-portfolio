import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';

import { profile } from '../../data/portfolio';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

@Component({
  selector: 'app-site-header',
  imports: [],
  templateUrl: './site-header.html',
})
export class SiteHeader implements AfterViewInit, OnDestroy {
  protected readonly profile = profile;
  protected readonly navItems: NavItem[] = [
    { label: 'Home', href: '#top', id: 'top' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Expertise', href: '#expertise', id: 'expertise' },
    { label: 'Tools', href: '#tools', id: 'tools' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Personal Info', href: '#personal-info', id: 'personal-info' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  protected isMenuOpen = false;
  protected isScrolled = false;
  protected activeId = 'top';

  ngAfterViewInit(): void {
    queueMicrotask(() => this.updateActiveSection());
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.isScrolled = window.scrollY > 12;
    this.updateActiveSection();
  }

  @HostListener('window:resize')
  protected onWindowResize(): void {
    if (window.innerWidth > 720 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  ngOnDestroy(): void {
    document.body.classList.remove('nav-open');
  }

  protected toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle('nav-open', this.isMenuOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen = false;
    document.body.classList.remove('nav-open');
  }

  protected handleNavClick(id: string): void {
    this.activeId = id;
    this.closeMenu();
  }

  private updateActiveSection(): void {
    const documentElement = document.documentElement;
    const atPageBottom =
      window.innerHeight + window.scrollY >= documentElement.scrollHeight - 4;

    if (atPageBottom) {
      this.activeId = this.navItems[this.navItems.length - 1].id;
      return;
    }

    const header = document.querySelector<HTMLElement>('.site-header');
    const headerOffset = (header?.offsetHeight ?? 72) + 28;
    const offset = Math.max(headerOffset, Math.min(window.innerHeight * 0.34, 260));
    let current = this.navItems[0].id;

    for (const item of this.navItems) {
      const section = document.getElementById(item.id);

      if (section && section.getBoundingClientRect().top <= offset) {
        current = item.id;
      }
    }

    this.activeId = current;
  }
}
