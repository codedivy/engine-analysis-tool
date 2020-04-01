import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLeaseComponent } from './pre-lease.component';

describe('PreLeaseComponent', () => {
  let component: PreLeaseComponent;
  let fixture: ComponentFixture<PreLeaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreLeaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
