import { TestBed } from '@angular/core/testing';

import { ApiRestSupabase } from './api-rest-supabase';

describe('ApiRestSupabase', () => {
  let service: ApiRestSupabase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRestSupabase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
