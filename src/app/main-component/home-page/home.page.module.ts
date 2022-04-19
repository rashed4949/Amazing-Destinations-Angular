import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomePageComponent } from "./home.page.component";
import { HomePageRoutes } from "./home.page.route";

@NgModule({
    imports: [
        RouterModule.forChild(HomePageRoutes)

    ],
    declarations: [
        HomePageComponent,
    ],
    exports: [
        RouterModule,
        HomePageComponent,
    ],
    providers: [
]
})

export class HomePageModule { }
