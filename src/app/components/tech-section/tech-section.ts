import { Component } from '@angular/core';

import { techStack } from '../../data/portfolio';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-tech-section',
  imports: [SectionHeading],
  templateUrl: './tech-section.html'
})
export class TechSection {
  protected readonly techStack = techStack;
}
