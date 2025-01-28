import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSuccessesComponent } from './recent-successes.component';

describe('RecentSuccessesComponent', () => {
  let component: RecentSuccessesComponent;
  let fixture: ComponentFixture<RecentSuccessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentSuccessesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentSuccessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
