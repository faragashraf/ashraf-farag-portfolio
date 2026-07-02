import { Component } from '@angular/core';

import { caseStudies } from '../../data/portfolio';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-work-section',
  imports: [SectionHeading],
  templateUrl: './work-section.html'
})
export class WorkSection {
  protected readonly caseStudies = caseStudies;
}
