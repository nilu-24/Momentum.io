import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollabPageComponent } from './collab-page/collab-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostPageComponent } from './post-page/post-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: MainPageComponent},
  {path: 'app', component: LandingPageComponent},
  {path: 'challenges', component: PostPageComponent, data: {isChallenge: true}},
  {path: 'ideas', component: PostPageComponent, data: {isChallenge: false}},
  {path: 'collab', component: CollabPageComponent, data : {id: '1', name: 'Angular'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
