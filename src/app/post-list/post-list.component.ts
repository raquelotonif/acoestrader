import {Component, OnInit} from '@angular/core';
import {PostServices} from '../../core/post.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [];

  constructor(private _postService: PostServices) {
  }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this._postService.getPosts()
      .subscribe((posts) => this.posts = posts)
  }
}
