import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-garantia',
  templateUrl: './garantia.component.html',
  styleUrls: ['./garantia.component.scss']
})
export class GarantiaComponent implements OnInit {


feature:any;
selectFeature:any;
specification: any;
selectSpecification:any;
warranty: any;
selectWarranty:any;
  constructor(private dataService: DataService) { 
    this.feature = this.dataService.feature;
    this.selectFeature = this.dataService.selectFeature;

    this.specification = this.dataService.specification;
    this.selectSpecification = this.dataService.selectSpecificaion;

    this.warranty = this.dataService.warranty;
    this.selectWarranty = this.dataService.selectWarranty;
  }

  ngOnInit(): void {
  }

 
  select(i: number) {
    console.log(i)
    if (this.selectWarranty[i] == true) {
      for (let index = 0; index < this.selectWarranty.length; index++) {
        this.selectWarranty[index] = false;
        this.dataService.selectWarranty[index] = false;
      }
    } else {
      for (let index = 0; index < this.selectWarranty.length; index++) {
        this.selectWarranty[index] = false;
        this.dataService.selectWarranty[index] = false;
      }
      this.selectWarranty[i] = true;
      this.dataService.selectWarranty[i] = true;
    }
    this.dataService.calcularImporte();
  }

  selectFeatures(i: number) {
    console.log(i)
    if (this.selectFeature[i] == true) {
      for (let index = 0; index < this.selectFeature.length; index++) {
        this.selectFeature[index] = false;
      }
    } else {
      for (let index = 0; index < this.selectFeature.length; index++) {
        this.selectFeature[index] = false;
      }
      this.selectFeature[i] = true
    }
    this.dataService.calcularImporte()
  }

selectSpecificacion(i: number) {
    console.log(i)
    if (this.selectSpecification[i] == true) {
      for (let index = 0; index < this.selectSpecification.length; index++) {
        this.selectSpecification[index] = false;
        this.dataService.selectSpecificaion[index] = false;
      }
    } else {
      for (let index = 0; index < this.selectSpecification.length; index++) {
        this.selectSpecification[index] = false;
        this.dataService.selectSpecificaion[index] = false;
      }
      this.selectSpecification[i] = true;
      this.dataService.selectSpecificaion[i] = true;
    }
  }

  calcularImporte(){
    this.dataService.calcularImporte()
  }
}
