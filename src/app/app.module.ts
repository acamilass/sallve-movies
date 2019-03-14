import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { SearchModule } from './search/search.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MoviesService } from './services/movies.service';
import { MovieEffects } from './store/effects/movie.effect';
import { movieReducer } from './store/reducers/movie.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HomeModule,
    SearchModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ movie: movieReducer }),
    EffectsModule.forRoot([MovieEffects])
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
