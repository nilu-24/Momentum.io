import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from '../interfaces/post.interface';
import { CollabService } from '../services/collab.service';

@Component({
  selector: 'app-trending-post',
  templateUrl: './trending-post.component.html',
  styleUrls: ['./trending-post.component.less']
})
export class TrendingPostComponent implements OnInit {

  @Input() post: IPost | undefined;
  voted = false;

  constructor(private readonly router: Router,
    private readonly collabService: CollabService) { }

  ngOnInit(): void {
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

}
