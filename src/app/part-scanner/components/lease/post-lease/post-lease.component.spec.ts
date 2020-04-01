import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLeaseComponent } from './post-lease.component';

describe('PostLeaseComponent', () => {
  let component: PostLeaseComponent;
  let fixture: ComponentFixture<PostLeaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLeaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
