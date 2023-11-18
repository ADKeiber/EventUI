import { TestBed } from '@angular/core/testing';

import { AdminCanActivateGuardService } from './admin-can-activate-guard.service';

describe('AdminCanActivateGuardService', () => {
  let service: AdminCanActivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCanActivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
