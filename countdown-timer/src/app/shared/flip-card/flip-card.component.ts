import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css'],
  animations:[
    trigger("flip",[
      transition('*=>*',[
      animate(".6s",keyframes([
        style({transform:"rotateX(0deg)",offset: 0}),
        style({transform:"rotateX(-90deg)",offset: .5}),
        style({transform:"rotateX(-180deg)",offset: 1}),
      ]))
    ])
  ])]
})
export class FlipCardComponent implements OnInit {
  title = 'counter';
  value=0;
  oldvalue=1;
  newvalue=2;

  constructor() { }

  ngOnInit() {
  }

}
