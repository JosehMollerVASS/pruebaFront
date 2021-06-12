import { Component, OnInit, ViewChild } from '@angular/core';
import { NguCarouselConfig, NguCarousel } from '@ngu/carousel';
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent  {

  imgags = [
    'assets/audifonoA.PNG',
    'assets/audifonoA.PNG',
    'assets/audifonoA.PNG',
    'assets/audifonoA.PNG',
    'assets/audifonoA.PNG',
    'assets/audifonoA.PNG',
    'assets/audifonoA.PNG',
    'assets/audifonoA.PNG'
  ];

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
}
