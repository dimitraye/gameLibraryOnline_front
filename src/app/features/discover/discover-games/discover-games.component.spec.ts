import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverGamesComponent } from './discover-games.component';

describe('DiscoverGamesComponent', () => {
  let component: DiscoverGamesComponent;
  let fixture: ComponentFixture<DiscoverGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscoverGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
