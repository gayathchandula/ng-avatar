import { TestBed } from '@angular/core/testing';

import { NgAvatarCreatorService } from './ng-avatar-creator.service';

describe('NgAvatarCreatorService', () => {
  let service: NgAvatarCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAvatarCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
