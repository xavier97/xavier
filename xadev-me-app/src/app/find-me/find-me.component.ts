import { Component, OnInit } from '@angular/core';
import { FilePreviewOverlayService } from '../file-preview-overlay.service';
import { FilePreviewOverlayRef } from '../file-preview-overlay-ref';

const ESCAPE = 27;

@Component({
  selector: 'app-find-me',
  templateUrl: './find-me.component.html',
  styleUrls: ['./find-me.component.scss'],
})
export class FindMeComponent implements OnInit {

  constructor(private overlaySvc: FilePreviewOverlayService) { }

  ngOnInit() { }

  open(site: string) {
    let url: string;
    switch (site) {
      case ('twitter'):
        url = 'https://twitter.com/xavieer97';
        break;
      case ('linkedin'):
        url = 'https://www.linkedin.com/in/xadev/';
        break;
      case ('github'):
        url = 'https://github.com/xavier97';
        break;
      case ('instagram'):
        url = 'https://www.instagram.com/xad.io/';
        break;
      case ('resume'):
        this.openResume();
        break;
    }
    if (url) {
      window.open(url, '_blank');
    }
  }

  openResume() {
    const dialogRef: FilePreviewOverlayRef = this.overlaySvc.openResume();
  }

}
