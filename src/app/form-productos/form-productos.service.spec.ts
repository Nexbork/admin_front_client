import { TestBed } from '@angular/core/testing';

import { FormProductosService } from './form-productos.service';

describe('FormProductosService', () => {
  let service: FormProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
