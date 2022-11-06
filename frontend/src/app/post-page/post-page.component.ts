import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  user: IUser | undefined;
  trending: IPost[] = [];

  constructor(
      private readonly userService: UserService,
      private readonly postService: PostService,
      private readonly route: ActivatedRoute,
      private readonly router: Router
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

    if(this.isChallenge){
      this.trending =  this.postService.getTrendingChallenges();
    }
    else if(!this.isChallenge) {
      this.trending = this.postService.getTrendingIdeas();
    }
    this.user = this.userService.getCurrentUser();
  }

  logout(){
    sessionStorage.clear();

    this.router.navigate([''])
    .then(() => {
      window.location.reload()
    });
  }
}
