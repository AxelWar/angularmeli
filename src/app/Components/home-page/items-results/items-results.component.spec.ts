import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsResultsComponent } from './items-results.component';

describe('ItemsResultsComponent', () => {
  let component: ItemsResultsComponent;
  let fixture: ComponentFixture<ItemsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
