import { Component } from '@angular/core';

import { caseStudies } from '../../data/portfolio';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-work-section',
  imports: [SectionHeading],
  templateUrl: './work-section.html',
})
export class WorkSection {
  protected readonly caseStudies = caseStudies;
  private readonly missingLogos = new Set<string>();

  protected markLogoMissing(logo?: string): void {
    if (!logo) {
      return;
    }

    this.missingLogos.add(logo);
  }

  protected isLogoMissing(logo?: string): boolean {
    if (!logo) {
      return true;
    }

    return this.missingLogos.has(logo);
  }
}
