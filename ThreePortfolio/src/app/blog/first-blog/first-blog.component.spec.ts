import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBlogComponent } from './first-blog.component';

describe('FirstBlogComponent', () => {
  let component: FirstBlogComponent;
  let fixture: ComponentFixture<FirstBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
