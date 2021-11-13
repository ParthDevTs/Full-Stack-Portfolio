import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlatformModule } from '@angular/cdk/platform';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './layout/default/default.component';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { HomeComponent } from './modules/home/home.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ParticlesModule } from 'angular-particle';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { FooterComponent } from './shared/footer/footer.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContactComponent } from './modules/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    TopNavComponent,
    HomeComponent,
    ScrollSpyDirective,
    FooterComponent,
    LoaderComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    PlatformModule,
    MatProgressBarModule,
    ParticlesModule,
    FontAwesomeModule,
    MatTooltipModule,
    ReactiveFormsModule,
    HttpClientModule,
    OverlayModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
