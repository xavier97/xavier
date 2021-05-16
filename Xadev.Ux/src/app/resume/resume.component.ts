import { Component, OnInit, HostListener, EventEmitter } from '@angular/core';
import { FilePreviewOverlayRef } from '../services/file-preview-service/file-preview-overlay-ref';
import { FILE_PREVIEW_DIALOG_DATA } from '../services/file-preview-service/file-preview-overlay.tokens';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';

const ANIMATION_TIMINGS = '400ms cubic-bezier(0.25, 0.8, 0.25, 1)';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    trigger('fade', [
      state('fadeOut', style({ opacity: 0 })),
      state('fadeIn', style({ opacity: 1 })),
      transition('* => fadeIn', animate(ANIMATION_TIMINGS))
    ]),
    trigger('slideContent', [
      state('void', style({ transform: 'translate3d(0, 25%, 0) scale(0.9)', opacity: 0 })),
      state('enter', style({ transform: 'none', opacity: 1 })),
      state('leave', style({ transform: 'translate3d(0, 25%, 0)', opacity: 0 })),
      transition('* => *', animate(ANIMATION_TIMINGS)),
    ])
  ]
})
export class ResumeComponent implements OnInit {

  fileUri = '../../assets/pdf/Xavier_Resume_2020.pdf';
  fileName = 'Xavier_Resume_2020.pdf';
  animationState: 'void' | 'enter' | 'leave' = 'enter';
  animationStateChanged = new EventEmitter<AnimationEvent>();

  loading = true;

  // Listen on keydown events on a document level
  @HostListener('document:keydown', ['$event']) private handleKeydown(event: KeyboardEvent) {
    const ESCAPE = 27;

    if (event.keyCode === ESCAPE) {
      this.closePreview();
    }
  }

  constructor(public dialogRef: FilePreviewOverlayRef, private sanitizer: DomSanitizer) { }

  ngOnInit(): void { }

  onLoad(event: any) {
    this.loading = false;
  }

  onAnimationStart(event: any) {
    this.animationStateChanged.emit(event);
  }

  onAnimationDone(event: any) {
    this.animationStateChanged.emit(event);
  }

  startExitAnimation() {
    this.animationState = 'leave';
  }

  closePreview() {
    this.dialogRef.close();
  }
}


