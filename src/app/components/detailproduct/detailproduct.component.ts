import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.scss']
})
export class DetailproductComponent implements OnInit {
  product: any;
  constructor(private dataService: DataService) { 
    this.product = this.dataService.product;
  }
  
  ngOnInit(): void {
  }




}
