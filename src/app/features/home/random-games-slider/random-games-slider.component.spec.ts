import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomGamesSliderComponent } from './random-games-slider.component';

describe('RandomGamesSliderComponent', () => {
  let component: RandomGamesSliderComponent;
  let fixture: ComponentFixture<RandomGamesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomGamesSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomGamesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
