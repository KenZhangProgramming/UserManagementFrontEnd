import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerItemsComponent } from './customer-items.component';

describe('CustomerItemsComponent', () => {
  let component: CustomerItemsComponent;
  let fixture: ComponentFixture<CustomerItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
