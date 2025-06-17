import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunRise } from './sun-rise';

describe('SunRise', () => {
  let component: SunRise;
  let fixture: ComponentFixture<SunRise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunRise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunRise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
