import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStatisticComponent } from './home-statistic.component';

describe('HomeStatisticComponent', () => {
  let component: HomeStatisticComponent;
  let fixture: ComponentFixture<HomeStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStatisticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
