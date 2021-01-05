import { Component } from '@angular/core';
import {Animations} from '../animations/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [Animations.slideIn]
})
export class NavComponent {
  isMenuOpen = false;
  contentMargin = 240;

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    !this.isMenuOpen ? this.contentMargin = 70 : this.contentMargin = 240;
  }
}
