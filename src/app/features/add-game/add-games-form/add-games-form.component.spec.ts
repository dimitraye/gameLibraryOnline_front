import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGamesFormComponent } from './add-games-form.component';

describe('AddGamesFormComponent', () => {
  let component: AddGamesFormComponent;
  let fixture: ComponentFixture<AddGamesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGamesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddGamesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
