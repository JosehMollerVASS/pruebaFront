import { ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NguCarouselConfig, NguCarousel } from '@ngu/carousel';
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input()
  padre!: string;
constructor(){

}


  ngOnInit() {
    console.log(this.padre)
  }

  imgags = ['assets/audifonoA.PNG', 'assets/audifonoA.PNG', 'assets/audifonoA.PNG'];
  choseFinish = ['For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True. ',
                  'Of all of the celestial bodies that capture our attention and fascination as astronomers.']
  choseFinishTitle = ['Ivory White', 'Matte Black']

  imageDetail =['assets/big-MOMENTUM-TRUEWIRELESS2.png', 
                'assets/product_detail_x1_mobile_MOMENTUM_True_Wireless_2_Case_black_Sennheiser.png', 
                'assets/ScreenShot2020-08-11.png' ]
  charterProduct = ['assets/icon/Path@3x.png', 'assets/icon/Shape.png', 'assets/icon/captura.png']
  titleCharterProduct = ['Customizable Touch Controls', 'Built-in Equalizer', 'Active Noise Cancellation']
  selects = [false, false, false];
  selectsProd = [false, false, false];

  public carouselTileConfig: NguCarouselConfig = {
    grid: {xs: 2, sm: 3, md: 3, lg: 5, xl:5, all: 0},
    speed: 500,
    point: {
      visible: true,
      hideOnSingleSlide: true
    },
    touch: true,
    loop: false,
    load: 2,
    interval: { timing: 1000 },
    // vertical: { enabled: true, height: 200 },
    velocity: 0,
    animation: 'lazy',
    easing: 'cubic-bezier(0.35, 0, 0.25, 1)',
    RTL: false
  };

 

  select(i:  number){
    
    if (this.selects[i] == true) {
      for (let index = 0; index < this.selects.length; index++) {
        this.selects[index] = false;        
      }
    }else{
      for (let index = 0; index < this.selects.length; index++) {
        this.selects[index] = false;        
      }
      this.selects[i] = true
    }
    
  }

  selectProdct(i:  number){
    console.log("i", i)
    if (this.selectsProd[i] == true) {
      for (let index = 0; index < this.selectsProd.length; index++) {
        this.selectsProd[index] = false;        
      }
    }else{
      for (let index = 0; index < this.selectsProd.length; index++) {
        this.selectsProd[index] = false;        
      }
      this.selectsProd[i] = true
    }
    
  }
}
