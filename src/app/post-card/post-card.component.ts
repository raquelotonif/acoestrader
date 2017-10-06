import {Component, Input, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  id = 0;
  @Input() post: {} = {};
  @Input() index: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.id = this.index
  }

}
