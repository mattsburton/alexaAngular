import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleComponent } from './view-single.component';

describe('ViewSingleComponent', () => {
  let component: ViewSingleComponent;
  let fixture: ComponentFixture<ViewSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
