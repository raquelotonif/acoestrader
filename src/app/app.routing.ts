import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'posts/:id', component: PostComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

export const appRouting = {
    routes: RouterModule.forRoot(appRoutes),
    components: [HomeComponent, PostComponent]
};
