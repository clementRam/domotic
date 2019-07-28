import { TestBed } from '@angular/core/testing';

import { DeviceImprovementService } from './device-improvement.service';

describe('DeviceImprovementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceImprovementService = TestBed.get(DeviceImprovementService);
    expect(service).toBeTruthy();
  });
});
