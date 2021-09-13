import { Component, VERSION, Input } from '@angular/core';

import { BehaviorSubject, Subject, timer } from 'rxjs';
import {
  map,
  pairwise,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';

import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
  query,
  group,
  stagger,
} from '@angular/animations';
@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
  animations: [
    trigger('flip', [
      transition('*=>*', [
        animate(
          '.6s',
          keyframes([
            style({ transform: 'rotateX(0deg)', offset: 0 }),
            style({ transform: 'rotateX(-90deg)', offset: 0.5 }),
            style({ transform: 'rotateX(-180deg)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class FlipCardComponent {
  change: boolean = false;
  showShadow = [];
  name = 'Angular ' + VERSION.major;
  initialMinutes$ = new BehaviorSubject(1000);
  expired$ = new Subject();

  @Input()
  set minutes(val: number) {
    this.initialMinutes$.next(val);
  }

  value = 0;
  timer$ = this.initialMinutes$.pipe(
    map((minutes: number) => minutes * 60000 + new Date().getTime()),
    switchMap((minutes) =>
      timer(0, 1000).pipe(
        map((t: any) => Math.round((minutes - new Date().getTime()) / 1000)),
        tap((seconds) => {
          if (seconds < 0) {
            this.expired$.next();
          }
        }),
        takeUntil(this.expired$),
        map((seconds: number) => ({
          hr: Math.max(Math.floor(seconds / 3600), 0),
          min: Math.max(Math.floor((seconds % 3600) / 60), 0),
          s: seconds % 60,
        })),
        map(({ hr, min, s }) => [
          hr > 9 ? hr.toString() : '0' + hr.toString(),
          min > 9 ? min.toString() : '0' + min.toString(),
          s > 9 ? s.toString() : '0' + s.toString(),
        ]),
        map((val: any[]) =>
          val
            .map((i: string) => i.split(''))
            .reduce((a: any, b: any) => [...a, ...b], [])
        ),
        pairwise(),
        map(([old, value]) => {
          return value.map((x: any, index: any) => ({
            value: x,
            old: old[index],
          }));
        })
      )
    )
  );
}

