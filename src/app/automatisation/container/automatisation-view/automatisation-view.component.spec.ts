import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatisationViewComponent } from './automatisation-view.component';

describe('AutomatisationViewComponent', () => {
  let component: AutomatisationViewComponent;
  let fixture: ComponentFixture<AutomatisationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatisationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatisationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
