import { TestBed } from '@angular/core/testing';

import { ArticoloService } from './articolo.service';

describe('ArticoloService', () => {
  let service: ArticoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
