import { TestBed } from '@angular/core/testing';

import { MyApiServicesService } from './my-api-services.service';

describe('MyApiServicesService', () => {
  let service: MyApiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyApiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
