import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseCardComponent } from './lease-card.component';

describe('LeaseCardComponent', () => {
  let component: LeaseCardComponent;
  let fixture: ComponentFixture<LeaseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
