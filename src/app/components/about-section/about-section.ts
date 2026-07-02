import { Component } from '@angular/core';

import { aboutText } from '../../data/portfolio';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-about-section',
  imports: [SectionHeading],
  templateUrl: './about-section.html'
})
export class AboutSection {
  protected readonly aboutText = aboutText;
}
