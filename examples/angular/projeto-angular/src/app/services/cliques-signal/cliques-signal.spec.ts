import { TestBed } from '@angular/core/testing';

import { CliquesSignal } from './cliques-signal';

describe('CliquesSignal', () => {
  let service: CliquesSignal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CliquesSignal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
