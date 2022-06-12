import { TestBed } from '@angular/core/testing';

import { DataMachineService } from './data-machine.service';

describe('DataMachineService', () => {
  let service: DataMachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
