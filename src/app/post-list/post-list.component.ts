import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
    posts = [1,2,3];

    constructor() {
    }

    ngOnInit() {
    }

}
