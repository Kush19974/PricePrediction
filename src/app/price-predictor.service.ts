import { Injectable } from '@angular/core';
import { STOCKS } from './share-stock';
import {StockClass} from './stock';

@Injectable()
export class PricePredictorService {
  private priceData : StockClass[] = STOCKS;
  constructor() { }

  getPrice(symbol: String):StockClass{
    for(var i = 0; i < this.priceData.length; i++)
    {
      // something is wrong
      if(this.priceData[i].symbol == symbol)
        return this.priceData[i];
    }
  }
}
