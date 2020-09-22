import { TestBed } from '@angular/core/testing';

import { ArticoloServiceService } from './articolo-service.service';

describe('ArticoloServiceService', () => {
  let service: ArticoloServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticoloServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
