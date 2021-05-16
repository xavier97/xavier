import { OverlayRef } from '@angular/cdk/overlay';
import { ResumeComponent } from '../../resume/resume.component';
import { Observable, Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';

export class FilePreviewOverlayRef {

  componentInstance: ResumeComponent;

  private _beforeClosed = new Subject<void>();
  private _afterClosed = new Subject<void>();

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    // Listen for animation 'start' events
    this.componentInstance.animationStateChanged.pipe(
      filter(event => event.phaseName === 'start'),
      take(1)
    ).subscribe(() => {
      this._beforeClosed.next();
      this._beforeClosed.complete();
      this.overlayRef.detachBackdrop();
    });

    // Listen for animation 'done' events
    this.componentInstance.animationStateChanged.pipe(
      filter(event => event.phaseName === 'done' && event.toState === 'leave'),
      take(1)
    ).subscribe(() => {
      this.overlayRef.dispose();
      this._afterClosed.next();
      this._afterClosed.complete();
      this.componentInstance = null;
    });

    this.componentInstance.startExitAnimation();
  }

  afterClosed(): Observable<void> {
    return this._afterClosed.asObservable();
  }

  beforeClose(): Observable<void> {
    return this._beforeClosed.asObservable();
  }
}
