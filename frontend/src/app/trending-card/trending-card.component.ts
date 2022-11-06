import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../interfaces/post.interface';

@Component({
  selector: 'app-trending-card',
  templateUrl: './trending-card.component.html',
  styleUrls: ['./trending-card.component.less']
})
export class TrendingCardComponent implements OnInit {

  @Input() post : IPost | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
