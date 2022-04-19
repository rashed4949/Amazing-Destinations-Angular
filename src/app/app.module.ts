import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './main-component/home-page/home.page.component';
import { AboutUsComponent } from './main-component/about-us/about.us.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './main-component/home-page/home.page.module';

const appRoutes: Routes = [
  {
    
    path: 'aboutUs', component: AboutUsComponent,
    
}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

