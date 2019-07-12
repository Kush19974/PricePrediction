import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PricePredictorService} from './price-predictor.service';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';


@NgModule({
  declarations: [
    AppComponent,
    StockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PricePredictorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
