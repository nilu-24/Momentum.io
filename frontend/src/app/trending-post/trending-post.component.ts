import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../interfaces/post.interface';

@Component({
  selector: 'app-trending-post',
  templateUrl: './trending-post.component.html',
  styleUrls: ['./trending-post.component.less']
})
export class TrendingPostComponent implements OnInit {

  @Input() post: IPost | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
