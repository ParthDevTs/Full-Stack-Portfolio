import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothScrollComponent } from './smooth-scroll.component';

describe('SmoothScrollComponent', () => {
  let component: SmoothScrollComponent;
  let fixture: ComponentFixture<SmoothScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmoothScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
