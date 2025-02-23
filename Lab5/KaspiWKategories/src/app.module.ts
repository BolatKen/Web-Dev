import { RouterModule } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { ProductItemComponent } from "./app/components/product-item/product-item.component";
import { HeaderComponent } from "./app/components/header/header.component";
import { NgModel } from "@angular/forms";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent,
        ProductItemComponent,
        HeaderComponent
    ],
    imports: [
        RouterModule.forRoot([
            {path: '', component: AppComponent},
        ]),
        BrowserModule
    ]
})
