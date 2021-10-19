import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxEffectComponent } from './parallax-effect.component';

describe('ParallaxEffectComponent', () => {
  let component: ParallaxEffectComponent;
  let fixture: ComponentFixture<ParallaxEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallaxEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
