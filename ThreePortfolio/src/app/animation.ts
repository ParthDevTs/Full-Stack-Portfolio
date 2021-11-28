import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';

export const slideInAnimation = trigger('routeAnimations', [
  transition('1 => 2,1=>4,2=>4', [
    style({ height: '!', overflow: 'hidden' }),
    query(':enter', style({ transform: 'translateX(100%)' })),
    query(
      ':enter, :leave',
      style({ position: 'absolute', top: 0, left: 0, right: 0 })
    ),
    // animate the leave page away
    group([
      query(':leave', [
        animate(
          '0.5s cubic-bezier(.35,0,.25,1)',
          style({ transform: 'translateX(-100%)' })
        ),
      ]),
      // and now reveal the enter
      query(
        ':enter',
        animate(
          '0.5s cubic-bezier(.35,0,.25,1)',
          style({ transform: 'translateX(0)' })
        )
      ),
    ]),
  ]),
  transition('2 => 1,4=>2,4=>1', [
    style({ height: '!', overflow: 'hidden' }),
    query(':enter', style({ transform: 'translateX(-100%)' })),
    query(
      ':enter, :leave',
      style({ position: 'absolute', top: 0, left: 0, right: 0 })
    ),
    // animate the leave page away
    group([
      query(':leave', [
        animate(
          '0.3s cubic-bezier(.35,0,.25,1)',
          style({ transform: 'translateX(100%)' })
        ),
      ]),
      // and now reveal the enter
      query(
        ':enter',
        animate(
          '0.3s cubic-bezier(.35,0,.25,1)',
          style({ transform: 'translateX(0)' })
        )
      ),
    ]),
  ]),
  transition('3<=>*', [
    style({ height: '!', overflow: 'hidden' }),
    query(':enter', style({ transform: 'translateY(-100%)' })),
    query(
      ':enter, :leave',
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
      })
    ),
    // animate the leave page away
    group([
      query(':leave', [
        animate(
          '0.8s cubic-bezier(.35,0,.25,1)',
          style({ transform: 'translateY(100%)', overflow: 'hidden' })
        ),
      ]),
      // and now reveal the enter
      query(
        ':enter',
        animate(
          '0.8s cubic-bezier(.35,0,.25,1)',
          style({ transform: 'translateY(0)' })
        )
      ),
    ]),
  ]),
  // transition('4=>3 , 2 => 3 ,1=>3', [
  //   style({ height: '!' }),
  //   query(
  //     ':enter',
  //     style({ transform: 'translateY(100%)', overflow: 'hidden' })
  //   ),
  //   query(
  //     ':enter, :leave',
  //     style({
  //       position: 'absolute',
  //       left: 0,
  //       right: 0,
  //       top: 0,
  //       overflow: 'hidden',
  //     })
  //   ),
  //   // animate the leave page away
  //   group([
  //     query(':leave', [
  //       animate(
  //         '0.8s cubic-bezier(.35,0,.25,1)',
  //         style({ transform: 'translateY(-100%)', overflow: 'hidden' })
  //       ),
  //     ]),
  //     // and now reveal the enter
  //     query(
  //       ':enter',
  //       animate(
  //         '0.8s cubic-bezier(.35,0,.25,1)',
  //         style({ transform: 'translateY(0)', overflow: 'hidden' })
  //       )
  //     ),
  //   ]),
  // ]),
]);
