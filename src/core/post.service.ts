import {Injectable}     from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class PostServices {
  posts: any;
  post: any;

  constructor(private db: AngularFireDatabase,) {
  }

  getPosts() {
    this.posts = this.db.list('posts').valueChanges();
    return this.posts
  };

  getPost(id: number) {
    this.post = this.db.object('/posts/' + id).valueChanges();
    return this.post
  }
}
