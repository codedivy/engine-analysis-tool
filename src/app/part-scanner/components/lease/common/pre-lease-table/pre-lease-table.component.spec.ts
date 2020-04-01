import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLeaseTableComponent } from './pre-lease-table.component';

describe('PreLeaseTableComponent', () => {
  let component: PreLeaseTableComponent;
  let fixture: ComponentFixture<PreLeaseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreLeaseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLeaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
