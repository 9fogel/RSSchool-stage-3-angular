import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import CoreModule from './core/core.module';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { cardsReducer, videosReducer } from './redux/reducers/app.reducer';
import YoutubeApiEffects from './redux/effects/youtube-api.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    StoreModule.forRoot({ youtube: videosReducer, admin: cardsReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([YoutubeApiEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
