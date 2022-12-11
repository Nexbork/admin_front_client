import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosGlobalesComponent } from './productos-globales.component';

describe('ProductosGlobalesComponent', () => {
  let component: ProductosGlobalesComponent;
  let fixture: ComponentFixture<ProductosGlobalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosGlobalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosGlobalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
