import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from '../interfaces/post.interface';
import { IUNTag } from '../interfaces/un_tag.interface';
import { PostService } from '../services/posts.service';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less'],
})
export class AdminPageComponent implements OnInit {
  trendingChallenges: IPost[] = [];
  trendingIdeas: IPost[] = [];

  un_tags : IUNTag[] = [
    { id: 0, title: 'Select UN Tag', color: '#00000'},
    { id: 1, title: 'No Poverty', color: '#E5233D'},
    { id: 2, title: 'Zero Hunger', color: '#DDA73A'},
    { id: 3, title: 'Good Health and Well Being', color: '#4CA146'},
    { id: 4, title: 'Quality Education', color: '#C7202F'},
    { id: 5, title: 'Gender Equality', color: '#F0402D'},
    { id: 6, title: 'Clean Water and Sanitation', color: '#28BFE6'},
    { id: 7, title: 'Affordable and Clean Energy', color: '#FBC411'},
    { id: 8, title: 'Decent Work and Economic Growth', color: '#831C44'},
    { id: 9, title: 'Industry, Innovation and Infrastructure', color: '#F26A2F'},
    { id: 10, title: 'Reduced Inequalities', color: '#E01583'},
    { id: 11, title: 'Sustainable Cities and Communities', color: '#F89D2A'},
    { id: 12, title: 'Responsible Consumption and Production',color: '#BF8D2C'},
    { id: 13, title: 'Climate Action', color: '#408046'},
    { id: 14, title: 'Life Below Water', color: '#1F97B4'},
    { id: 15, title: 'Life on Land', color: '#58BA47'},
    { id: 16, title: 'Peach, Justice and Strong Institutions', color: '#136A9F'},
    { id: 17, title: 'Partnerships for the goals', color: '#14496B'},
  ]

  constructor(
    private readonly router: Router,
    private readonly postService: PostService
  ) {
    this.postService.getTrending().then(res => {

      var sortedPosts = res.sort((a: IPost, b: IPost) => b.votes - a.votes);

      this.trendingChallenges = sortedPosts.filter(res => res.flag == false);
      this.trendingIdeas = sortedPosts.filter(res => res.flag == true);
    });
  }

  ngOnInit(): void {}

  logout() {
    sessionStorage.clear();

    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
}
