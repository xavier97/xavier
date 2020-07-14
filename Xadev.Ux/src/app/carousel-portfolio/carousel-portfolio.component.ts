import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel-portfolio',
  templateUrl: './carousel-portfolio.component.html',
  styleUrls: ['./carousel-portfolio.component.scss']
})
export class CarouselPortfolioComponent implements OnInit, AfterViewInit {

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges(); // detect changes for mat-carousel
  }
}
