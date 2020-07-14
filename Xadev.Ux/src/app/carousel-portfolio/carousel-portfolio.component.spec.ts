import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPortfolioComponent } from './carousel-portfolio.component';

describe('CarouselPortfolioComponent', () => {
  let component: CarouselPortfolioComponent;
  let fixture: ComponentFixture<CarouselPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
