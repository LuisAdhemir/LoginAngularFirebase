import { TestBed } from '@angular/core/testing';

import { AutenticaServiceService } from './autentica-service.service';

describe('AutenticaServiceService', () => {
  let service: AutenticaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
