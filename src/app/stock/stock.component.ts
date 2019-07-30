import { Component, OnInit } from '@angular/core';
import {PricePredictorService} from '../price-predictor.service';
import {Stock} from '../stock';
import {STOCKS} from '../share-stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private currentPriceData : Stock;
  constructor(private stockservice : PricePredictorService) { }
  ngOnInit() {
  }
  getPrice(symbol:string):void{
    this.currentPriceData = this.stockservice.getPrice(symbol);
  }
  showDiv():void {
    document.getElementById('tb').style.display = "block";
  }
}
