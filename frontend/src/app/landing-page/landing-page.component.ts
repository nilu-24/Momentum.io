import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { IPost } from '../interfaces/post.interface';
import { IUser } from '../interfaces/user.interface';
import { PostService } from '../services/posts.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

  trendingChallenges: IPost[] = [];
  trendingIdeas: IPost[] = [];
  user: IUser | undefined;

  currentLanguage = 'FR';

  constructor(private readonly router: Router,
    private readonly userService: UserService,
    private readonly postService : PostService,
    private readonly translocoService: TranslocoService
    ) {

    this.postService.getTrending().then(res => {

      var sortedPosts = res.sort((a: IPost, b: IPost) => b.votes - a.votes);

      this.trendingChallenges = sortedPosts.filter(res => res.flag == false).splice(0, 5);
      this.trendingIdeas = sortedPosts.filter(res => res.flag == true).splice(0, 5);
    });

    let uid = sessionStorage.getItem("user");

    if(uid == null)
      uid = '';

    this.userService.getUserById(parseInt(uid)).then(res => this.user = res);
  }

  ngOnInit(): void {
  }

  navigateToChallenges(){
    this.router.navigate(['challenges'])
    .then(() => {
      window.location.reload()
    });
  }
  navigateToIdeas(){
    this.router.navigate(['ideas'])
    .then(() => {
      window.location.reload()
    });
  }

  logout(){
    sessionStorage.clear();

    this.router.navigate([''])
    .then(() => {
      window.location.reload()
    });
  }

  navigateToHome(){
    this.router.navigate(['app'])
    .then(() => {
      window.location.reload()
    });
  }

  toggleLanguage(){
    if(this.currentLanguage === 'FR')
    {
      this.translocoService.setActiveLang('fr');
      this.currentLanguage = 'EN';
    }
    else if(this.currentLanguage === 'EN')
    {
      this.translocoService.setActiveLang('en');
      this.currentLanguage = 'FR';
    }

  }

}
