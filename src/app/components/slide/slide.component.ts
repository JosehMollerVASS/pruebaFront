import { ElementRef, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NguCarouselConfig, NguCarousel } from '@ngu/carousel';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input()
  padre!: string;
  imgags: any;
  choseFinish: any;
  choseFinishTitle: any;
  imageDetail: any;
  charterProduct: any;
  titleCharterProduct: any;
  selects: any;
  selectsProd: any;

  @Output()
  urlImage: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dataService: DataService) {    
    this.imgags = this.dataService.imgags;
    this.choseFinish = this.dataService.choseFinish;
    this.choseFinishTitle = this.dataService.choseFinishTitle;
    this.imageDetail = this.dataService.imageDetail;
    this.charterProduct = this.dataService.charterProduct;
    this.titleCharterProduct = this.dataService.titleCharterProduct;
    this.selects = this.dataService.selects;
    this.selectsProd = this.dataService.selectsProd;
  }


  ngOnInit() {
    console.log(this.padre)
  }

selectImagen(url: string){
  this.urlImage.emit(url);
}

  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 2, sm: 3, md: 3, lg: 5, xl: 5, all: 0 },
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



  select(i: number) {

    if (this.selects[i] == true) {
      for (let index = 0; index < this.selects.length; index++) {
        this.selects[index] = false;
      }
    } else {
      for (let index = 0; index < this.selects.length; index++) {
        this.selects[index] = false;
      }
      this.selects[i] = true
    }

  }

  selectProdct(i: number, imagen: string) {
  
    if (this.selectsProd[i] == true) {
      for (let index = 0; index < this.selectsProd.length; index++) {
        this.selectsProd[index] = false;
      }
    } else {
      for (let index = 0; index < this.selectsProd.length; index++) {
        this.selectsProd[index] = false;
      }
      this.selectsProd[i] = true
    }

  }
}
