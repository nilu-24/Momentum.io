import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { IPost } from '../interfaces/post.interface';
import { IUser } from '../interfaces/user.interface';
import { PostService } from '../services/posts.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.less']
})
export class PostPageComponent implements OnInit {

  @Input() isChallenge  = true;
  currentLanguage = 'FR';

  user: IUser | undefined;
  trending: IPost[] = [];

  constructor(
      private readonly userService: UserService,
      private readonly postService: PostService,
      private readonly route: ActivatedRoute,
      private readonly router: Router,
      private readonly translocoService: TranslocoService
    ) {
      this.route.data.subscribe(result => this.isChallenge = result['isChallenge'])
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

  ngOnInit(): void {

    this.postService.getTrending().then(res => {

      var sortedPosts = res.sort((a: IPost, b: IPost) => b.votes - a.votes);

      if(this.isChallenge)
        this.trending = sortedPosts.filter(res => res.flag == false);
      else if(!this.isChallenge)
        this.trending = sortedPosts.filter(res => res.flag == true);
    });

    let uid = sessionStorage.getItem("user");

    if(uid == null)
      uid = '';

    this.userService.getUserById(parseInt(uid)).then(res => this.user = res);
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
