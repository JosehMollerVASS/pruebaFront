import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  imagenPrevisualizada: string = "assets/audifonoA.PNG";
  constructor(private dataService: DataService) { 
  }

  getUrlImage(url:string){
    console.log("Producto: "+url)
    switch (url) {
      case 'assets/product_detail_x1_mobile_MOMENTUM_True_Wireless_2_Case_black_Sennheiser.png':
        this.imagenPrevisualizada = 'assets/audifonoA.PNG';
        break;
      case 'assets/big-MOMENTUM-TRUEWIRELESS2.png':
        this.imagenPrevisualizada = 'assets/big-MOMENTUM-TRUEWIRELESS2@3x.png';
        break;
      case 'assets/ScreenShot2020-08-11.png':
        this.imagenPrevisualizada = 'assets/ScreenShot2020-08-11at10.15.55@3x.png';
          break;        
      default:
        break;
    }
     
  }
  ngOnInit(): void {
  }

}
