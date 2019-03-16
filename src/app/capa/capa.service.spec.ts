import { TestBed } from '@angular/core/testing';

import { CapaService } from './capa.service';

describe('CapaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapaService = TestBed.get(CapaService);
    expect(service).toBeTruthy();
  });
});
