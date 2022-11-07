import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { IPost } from '../interfaces/post.interface';
import { CollabService } from '../services/collab.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-trending-post',
  templateUrl: './trending-post.component.html',
  styleUrls: ['./trending-post.component.less']
})
export class TrendingPostComponent implements OnInit {

  @Input() post: IPost | undefined;
  voted = false;
  username = '';
  currentLanguage = 'FR';

  constructor(private readonly router: Router,
    private readonly collabService: CollabService,
    private readonly userService: UserService,
    private readonly translocoService: TranslocoService) {

  }

  ngOnInit(): void {

    if(this.post)
    {
      this.userService.getUserById(this.post.user).then(res => {
        this.username = res.username
      }
    )};
  }

  collab(){
    if(this.post)
    {
      this.collabService.setCollabPost(this.post);
    }
    this.router.navigate(['collab']);
  }

  upvote(postId: number){
    if(this.post){

      if(!this.voted)
      {
        this.post.votes += 1;
        this.voted = true;
      }
      else if(this.voted)
      {
        this.post.votes -= 1;
        this.voted = false;
      }
    }
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
