import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CollabPageComponent } from './collab-page/collab-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostPageComponent } from './post-page/post-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: MainPageComponent},
  {path: 'app', component: LandingPageComponent, canActivate: [AuthGuard]},
  {path: 'challenges', component: PostPageComponent, data: {isChallenge: true}, canActivate: [AuthGuard]},
  {path: 'ideas', component: PostPageComponent, data: {isChallenge: false}, canActivate: [AuthGuard]},
  {path: 'collab', component: CollabPageComponent, data : {id: '1', name: 'Angular'}, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
