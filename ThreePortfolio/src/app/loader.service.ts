import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor() {}

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  setStatus(loadStatus: boolean) {
    this.isLoading.next(loadStatus);
  }
}
