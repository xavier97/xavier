import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-portfolio',
  templateUrl: './carousel-portfolio.component.html',
  styleUrls: ['./carousel-portfolio.component.scss']
})
export class CarouselPortfolioComponent implements OnInit, AfterViewInit {

  constructor(private cdr: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges(); // detect changes for mat-carousel
  }

  navigateToProject(projectTitle: string) {
    this.router.navigate(['projects', projectTitle]);
  }

}
