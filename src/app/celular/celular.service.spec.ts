import { TestBed } from '@angular/core/testing';

import { CelularService } from './celular.service';

describe('CelularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CelularService = TestBed.get(CelularService);
    expect(service).toBeTruthy();
  });
});
