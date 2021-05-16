import { Component, OnInit } from '@angular/core';
import { FilePreviewOverlayService } from '../services/file-preview-service/file-preview-overlay.service';
import { FilePreviewOverlayRef } from '../services/file-preview-service/file-preview-overlay-ref';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

const ESCAPE = 27;

@Component({
  selector: 'app-find-me',
  templateUrl: './find-me.component.html',
  styleUrls: ['./find-me.component.scss'],
})
export class FindMeComponent implements OnInit {

  isSmallScreen: boolean;

  constructor(private overlaySvc: FilePreviewOverlayService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([
      '(max-width: 650px)'
    ]).subscribe(result => {
      if (result.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    });
  }

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
    if (this.isSmallScreen) {
      window.open('../assets/pdf/Xavier_Resume_2020.pdf', '_blank');
    } else {
      const dialogRef: FilePreviewOverlayRef = this.overlaySvc.openResume();
    }
  }

}
