import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    postImage = `../../assets/images/thumb1.svg`;
    postTitle = `Post Title`;
    postContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum justo, luctus vitae pretium id,
  congue cursus odio. Aliquam erat volutpat. Aliquam enim massa, malesuada a eleifend sit amet, molestie at leo.
  Maecenas at ultricies elit, sit amet vestibulum elit. Suspendisse libero augue, dictum at pretium ac, venenatis at
  est. Pellentesque pulvinar nisi sed arcu interdum, ut molestie massa accumsan. Phasellus imperdiet leo ante,
  egestas elementum est varius at. Vestibulum eu magna lacinia, ullamcorper lorem vel, consequat quam.
  Pellentesque massa est, semper in velit et, porta molestie ex. Nulla nunc ex, viverra a rutrum sit amet, viverra ac velit. Sed
  eu enim pharetra, fermentum ipsum eu, interdum libero. Proin vel eleifend leo. Nulla vel porta lorem. Donec
  vitae mollis magna.

  Nulla egestas molestie dui ac ornare. Nunc nec placerat ipsum, vitae gravida eros. Maecenas pellentesque
  massa ut ornare accumsan. Etiam gravida dolor sed elit consectetur, bibendum pellentesque ligula gravida.
  Maecenas tincidunt finibus velit non placerat. Nulla et tincidunt massa, nec elementum quam. Aliquam erat volutpat. Morbi
  maximus mi justo, in tempor tortor mollis sit amet.

  Vestibulum viverra quis magna id tristique. Sed nisl orci, sodales ut vulputate ac, auctor ut est.
  Integer vel nisl velit. In nibh nisi, tempor ac magna in, lobortis porttitor nunc. In aliquet justo justo, nec elementum
  ligula pulvinar nec. In odio nisi, maximus sit amet ornare ac, egestas id magna. Nunc eu dolor mi.

  Integer eget imperdiet neque, vel vehicula ex. Vivamus eu ex ut risus mattis posuere eget in metus.
  Aliquam vel viverra sem. Pellentesque at vestibulum orci. Donec tincidunt sollicitudin aliquet. Orci varius natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rhoncus nec dui sit amet fermentum.
  Pellentesque euismod dignissim nisl, non vulputate enim laoreet sit amet. Cras at mauris ac mauris facilisis
  tincidunt. Nam orci leo, egestas non fringilla at, condimentum quis ligula.

  Integer eu leo fermentum, sagittis massa a, venenatis ex. Nunc mauris quam, ullamcorper consectetur
  pellentesque quis, ornare at nisi. Maecenas semper nisl massa, eu egestas ligula malesuada consequat. Duis hendrerit
  molestie urna, eu tempus purus congue vitae. Sed in nunc mattis ligula lacinia pellentesque ac quis purus.
  Phasellus ac arcu nibh. Maecenas non dui odio. In non ultrices turpis. Ut viverra nisl mauris, id imperdiet erat congue
  quis. Mauris tincidunt bibendum sodales.`;

    constructor() {
    }

    ngOnInit() {
    }

}
