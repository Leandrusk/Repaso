import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFantasiaComponent } from './card-fantasia.component';

describe('CardFantasiaComponent', () => {
  let component: CardFantasiaComponent;
  let fixture: ComponentFixture<CardFantasiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFantasiaComponent]
    });
    fixture = TestBed.createComponent(CardFantasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
