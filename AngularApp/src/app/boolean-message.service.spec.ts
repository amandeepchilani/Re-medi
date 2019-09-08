import { TestBed } from '@angular/core/testing';

import { BooleanMessageService } from './boolean-message.service';

describe('BooleanMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooleanMessageService = TestBed.get(BooleanMessageService);
    expect(service).toBeTruthy();
  });
});
