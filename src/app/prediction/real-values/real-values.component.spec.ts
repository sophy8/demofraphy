import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealValuesComponent } from './real-values.component';

describe('RealValuesComponent', () => {
  let component: RealValuesComponent;
  let fixture: ComponentFixture<RealValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
