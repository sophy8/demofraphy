import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodComponentLongComponent } from './method-component-long.component';

describe('MethodComponentLongComponent', () => {
  let component: MethodComponentLongComponent;
  let fixture: ComponentFixture<MethodComponentLongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodComponentLongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodComponentLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
