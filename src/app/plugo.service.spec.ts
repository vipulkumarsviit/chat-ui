import { TestBed } from '@angular/core/testing';

import { PlugoService } from './plugo.service';

describe('PlugoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlugoService = TestBed.get(PlugoService);
    expect(service).toBeTruthy();
  });
});
