import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsListComponent } from './card-details-list.component';

describe('CardDetailsListComponent', () => {
  let component: CardDetailsListComponent;
  let fixture: ComponentFixture<CardDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDetailsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
