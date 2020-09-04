import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsCountComponent } from './earnings-count.component';

describe('EarningsCountComponent', () => {
  let component: EarningsCountComponent;
  let fixture: ComponentFixture<EarningsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
