import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    showSidemenu = false;

    toggleSidemenu() {
        this.showSidemenu = !this.showSidemenu
    }

    onActivate(e, bodyScroll) {
        bodyScroll.scrollTop = 0;
    }
}
