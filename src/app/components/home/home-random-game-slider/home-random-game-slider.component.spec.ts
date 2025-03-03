import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRandomGameSliderComponent } from './home-random-game-slider.component';

describe('HomeRandomGameSliderComponent', () => {
  let component: HomeRandomGameSliderComponent;
  let fixture: ComponentFixture<HomeRandomGameSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRandomGameSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRandomGameSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
