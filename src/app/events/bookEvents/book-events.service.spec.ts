import { TestBed, inject } from '@angular/core/testing';

import { BookEventsService } from './book-events.service';

describe('BookEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookEventsService]
    });
  });

  it('should be created', inject([BookEventsService], (service: BookEventsService) => {
    expect(service).toBeTruthy();
  }));
});
