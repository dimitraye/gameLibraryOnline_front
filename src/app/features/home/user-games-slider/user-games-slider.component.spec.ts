import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGamesSliderComponent } from './user-games-slider.component';

describe('UserGamesSliderComponent', () => {
  let component: UserGamesSliderComponent;
  let fixture: ComponentFixture<UserGamesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGamesSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserGamesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
