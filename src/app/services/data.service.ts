import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

//DATA DEL PRODUCTO
product = {subname: 'NEW RELEASE',
            name: 'MOMENTUN True Wireless 2',
            descripction: 'Earbuds that put sound first',
            subDescripcion: 'STARTING AT',
            price: '295.95'}    


//DATA DE COMPONENTE GARANTIA
  warranty = [{ title: '2 years coverage', descripcion: 'For the past 75 years, Sennheiser has put sound first.', precio: '' },
              { title: '3 years coverage', descripcion: 'For the past 75 years, Sennheiser has put sound first.', precio: '75' }]
  selectWarranty = [false, false];


  //DATA COMPONENTE SLIDE CHOSE YOUR FINISH
  choseFinishTitle = ['Ivory White', 'Matte Black']
  choseFinish = ['For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True. ',
                 'Of all of the celestial bodies that capture our attention and fascination as astronomers.']
  


  //SELECCION DE CARD VISTA PRODUCTO EN MINIATURA
  imgags = ['assets/audifonoA.PNG', 'assets/audifonoA.PNG', 'assets/audifonoA.PNG'];
  selectsProd = [false, false, false];    
  imageDetail = ['assets/big-MOMENTUM-TRUEWIRELESS2.png',
                 'assets/product_detail_x1_mobile_MOMENTUM_True_Wireless_2_Case_black_Sennheiser.png',
                 'assets/ScreenShot2020-08-11.png']
  
  
  //SELECCION DE CARD CARACTERISTICAS DE PRODUCTO CIN ICONOS
  titleCharterProduct = ['Customizable Touch Controls', 'Built-in Equalizer', 'Active Noise Cancellation']
  selects = [false, false, false];
  charterProduct = ['assets/icon/Path@3x.png', 'assets/icon/Shape.png', 'assets/icon/captura.png']
  

  //DATA FEATURE
  feature = [{ title: 'Voice Assistant support', precio: ''},
            { title: 'Customizable controls', precio: '25'}]
  selectFeature = [false, false];


  //DATA SPECIFICATION
  specification = [{ title: 'Dimensions', descripcion: '76.8 x 43.8 x 34.7 mm (earbuds and charging case)'},
                  { title: 'USB Standard', descripcion: 'USB-C'},
                  { title: 'Power supply', descripcion: 'Sennheiser 7mm dynamic driver'},
                  { title: 'Frequency response (Microphone)', descripcion: '100 Hz to 10 kHz'},
                  { title: 'Frequency response', descripcion: '5 - 21,000 Hz'},
                  { title: 'Noise cancellation', descripcion: 'Single-Mic ANC per earbud side'}]
  selectSpecificaion = [false, false, false, false, false, false]

  total = {total:''};
  calcularImporte() {
    let aux = 0;
    for (let index = 0; index < this.warranty.length; index++) {
      if (this.selectWarranty[index] == true ) {
        aux = aux + Number(this.warranty[index].precio);
      }
    }

    for (let index = 0; index < this.feature.length; index++) {
      if (this.selectFeature[index] == true) {
        aux = aux + Number(this.feature[index].precio);
      }
      
    }
    aux = aux + Number(this.product.price);
   console.log(aux)
    this.total.total = aux.toString();
  }
}
