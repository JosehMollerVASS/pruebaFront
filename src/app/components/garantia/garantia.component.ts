import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garantia',
  templateUrl: './garantia.component.html',
  styleUrls: ['./garantia.component.scss']
})
export class GarantiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  warranty = [{ title: '2 years coverage', descripcion: 'For the past 75 years, Sennheiser has put sound first.', precio: ''},
              { title: '3 years coverage', descripcion: 'For the past 75 years, Sennheiser has put sound first.', precio: '75'}]
  
  feature = [{ title: 'Voice Assistant support', precio: ''},
              { title: 'Customizable controls', precio: '25'}]

  specification = [{ title: 'Dimensions', descripcion: '76.8 x 43.8 x 34.7 mm (earbuds and charging case)'},
                  { title: 'USB Standard', descripcion: 'USB-C'},
                  { title: 'Power supply', descripcion: 'Sennheiser 7mm dynamic driver'},
                  { title: 'Frequency response (Microphone)', descripcion: '100 Hz to 10 kHz'},
                  { title: 'Frequency response', descripcion: '5 - 21,000 Hz'},
                  { title: 'Noise cancellation', descripcion: 'Single-Mic ANC per earbud side'}]
}
