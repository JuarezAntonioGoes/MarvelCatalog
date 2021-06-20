import { TestBed } from '@angular/core/testing';

import { CaractersApiService } from './caracters-api.service';

describe('CaractersApiService', () => {
  let service: CaractersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaractersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
