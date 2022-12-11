import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSubproductsComponent } from './tabla-subproducts.component';

describe('TablaSubproductsComponent', () => {
  let component: TablaSubproductsComponent;
  let fixture: ComponentFixture<TablaSubproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaSubproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaSubproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
