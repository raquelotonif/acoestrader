import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

    post = {
        id: 1, image: ``,
        title: ``, content: ``
    };

    constructor() {
    }

    ngOnInit() {
    }

}
