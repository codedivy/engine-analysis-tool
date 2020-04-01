import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLeaseTableComponent } from './post-lease-table.component';

describe('PostLeaseTableComponent', () => {
  let component: PostLeaseTableComponent;
  let fixture: ComponentFixture<PostLeaseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLeaseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLeaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
