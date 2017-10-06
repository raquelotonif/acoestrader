import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {PrivacyComponent} from './privacy/privacy.component';

import {LeadFormComponent} from './lead-form/lead-form.component';
import {LeadCapturePageComponent} from './lead-capture-page/lead-capture-page.component';

import {PostComponent} from './post/post.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostCardComponent} from './post-card/post-card.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts/:id', component: PostComponent},
  {path: 'ebook', component: LeadCapturePageComponent},
  {path: 'privacidade', component: PrivacyComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

export const appRouting = {
  routes: RouterModule.forRoot(appRoutes),
  components: [HomeComponent, FooterComponent, PrivacyComponent,
    LeadCapturePageComponent,LeadFormComponent, PostComponent, PostListComponent, PostCardComponent]
};
