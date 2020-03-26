import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ViewProuctsComponent } from './view-proucts/view-proucts.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
   declarations: [
      AppComponent,
      ListProductsComponent,
      ViewProuctsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
