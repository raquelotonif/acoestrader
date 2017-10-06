import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {PostServices} from '../../core/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: number;
  posts = [];
  post = [];

  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private _postService: PostServices) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getPost(this.id)
    });
  }

  getPost(id: number) {
    this._postService.getPost(id)
      .subscribe((post) => {
        this.post = post;
        this.titleService.setTitle(`${this.post['title']} | Ações Trader`);
      });
  }
}
