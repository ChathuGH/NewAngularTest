import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
/*
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
};*/

import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';

export const appConfig = {
  component: AppComponent,
  providers: [
    provideHttpClient(withFetch()),  // <--- Add this line here
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration() 
    // ...any other providers you have
  ]
};


