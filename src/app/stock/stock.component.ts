import { Component, OnInit } from '@angular/core';
import {PricePredictorService} from '../price-predictor.service';
import {StockClass} from '../stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private currentPrice : StockClass;

  constructor(private stockservice : PricePredictorService) { }

  ngOnInit() {
  }
  getPrice(symbol: string):void{
    this.currentPrice = this.stockservice.getPrice(symbol);
  }

}
