import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSidemenu = false;
  @ViewChild('bodyScroll') bodyScroll;

  toggleSidemenu() {
    this.showSidemenu = !this.showSidemenu
  }

  onDeactivate() {
  this.bodyScroll.scrollTo(0, 0);
  }
}
