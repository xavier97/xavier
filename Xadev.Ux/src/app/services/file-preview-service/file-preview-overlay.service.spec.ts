import { TestBed } from '@angular/core/testing';

import { FilePreviewOverlayService } from './file-preview-overlay.service';

describe('FilePreviewOverlayServiceService', () => {
  let service: FilePreviewOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilePreviewOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
