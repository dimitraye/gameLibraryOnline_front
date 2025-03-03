import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserGameSliderComponent } from './home-user-game-slider.component';

describe('HomeUserGameSliderComponent', () => {
  let component: HomeUserGameSliderComponent;
  let fixture: ComponentFixture<HomeUserGameSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeUserGameSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUserGameSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
