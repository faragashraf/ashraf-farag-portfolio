import { Component } from '@angular/core';

import { profile, techStack } from '../../data/portfolio';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html'
})
export class HeroSection {
  protected readonly profile = profile;
  protected readonly keySkills = techStack.slice(0, 6);
}
