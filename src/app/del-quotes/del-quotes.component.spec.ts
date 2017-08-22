import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelQuotesComponent } from './del-quotes.component';

describe('DelQuotesComponent', () => {
  let component: DelQuotesComponent;
  let fixture: ComponentFixture<DelQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
