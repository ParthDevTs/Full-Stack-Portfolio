import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/animation';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  animations: [slideInAnimation],
})
export class DefaultComponent implements OnInit {
  constructor() {}
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData['depth'];
  }

  ngOnInit(): void {}
}
