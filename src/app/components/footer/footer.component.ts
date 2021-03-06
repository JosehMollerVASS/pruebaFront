import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  product: any;
  total:any;
  constructor(private dataService: DataService) { 
    this.product = this.dataService.product;
    this.total = this.dataService.total;
  }

  ngOnInit(): void {
  }

 
}
