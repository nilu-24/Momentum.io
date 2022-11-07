import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatIconModule} from '@angular/material/icon';
import { HighchartsChartModule } from 'highcharts-angular';
import { MapComponent } from './map/map.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UserService } from './services/user.service';
import {MatCardModule} from '@angular/material/card';
import { TrendingCardComponent } from './trending-card/trending-card.component';
import { PostPageComponent } from './post-page/post-page.component';
import { TrendingPostComponent } from './trending-post/trending-post.component';
import { PostCardComponent } from './post-card/post-card.component';
import { CollabPageComponent } from './collab-page/collab-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PostService } from './services/posts.service';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { ChartModule } from 'angular-highcharts'
import { BarChartComponent } from './bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginDialogComponent,
    LandingPageComponent,
    MapComponent,
    TrendingCardComponent,
    PostPageComponent,
    TrendingPostComponent,
    PostCardComponent,
    CollabPageComponent,
    AdminPageComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    HighchartsChartModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    TranslocoRootModule,
    ChartModule
  ],
  providers: [UserService , PostService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
