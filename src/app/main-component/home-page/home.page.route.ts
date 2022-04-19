import { Routes } from "@angular/router";
import { HomePageComponent } from "./home.page.component";

export const HomePageRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home-page', component: HomePageComponent },
]