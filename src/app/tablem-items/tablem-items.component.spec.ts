import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItemsComponent } from './tablem-items.component';

describe('TablemItemsComponent', () => {
  let component: TableItemsComponent;
  let fixture: ComponentFixture<TableItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableItemsComponent]
    });
    fixture = TestBed.createComponent(TableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
