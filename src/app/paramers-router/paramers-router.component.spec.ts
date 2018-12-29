import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamersRouterComponent } from './paramers-router.component';

describe('ParamersRouterComponent', () => {
  let component: ParamersRouterComponent;
  let fixture: ComponentFixture<ParamersRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamersRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamersRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
