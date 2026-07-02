import { Component } from '@angular/core';

import { expertise } from '../../data/portfolio';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-expertise-section',
  imports: [SectionHeading],
  templateUrl: './expertise-section.html'
})
export class ExpertiseSection {
  protected readonly expertise = expertise;
}
