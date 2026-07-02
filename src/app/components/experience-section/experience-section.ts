import { Component } from '@angular/core';

import { experience } from '../../data/portfolio';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-experience-section',
  imports: [SectionHeading],
  templateUrl: './experience-section.html'
})
export class ExperienceSection {
  protected readonly experience = experience;
}
