import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksRevenueCountComponent } from './books-revenue-count.component';

describe('BooksRevenueCountComponent', () => {
  let component: BooksRevenueCountComponent;
  let fixture: ComponentFixture<BooksRevenueCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksRevenueCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksRevenueCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
