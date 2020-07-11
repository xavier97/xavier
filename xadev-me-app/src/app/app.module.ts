import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { UiCarouselModule } from 'ngx-ui-carousel';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CarouselPortfolioComponent } from './carousel-portfolio/carousel-portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FindMeComponent } from './find-me/find-me.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FilePreviewOverlayService } from './file-preview-overlay.service';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarouselPortfolioComponent,
    ContactMeComponent,
    FindMeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatTooltipModule,
    UiCarouselModule,
    MatIconModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
    OverlayModule,
    MatCarouselModule.forRoot(),
    MDBBootstrapModule.forRoot(),
  ],
  providers: [FilePreviewOverlayService, FindMeComponent],
  bootstrap: [AppComponent],
  entryComponents: [ResumeComponent]
})
export class AppModule { }
