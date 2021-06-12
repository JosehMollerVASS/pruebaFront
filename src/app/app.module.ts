import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FooterComponent } from './components/footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { ProductComponent } from './components/product/product.component';
import {MatCardModule} from '@angular/material/card';
import { DetailproductComponent } from './components/detailproduct/detailproduct.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TabComponent } from './components/tab/tab.component';
import { SlideComponent } from './components/slide/slide.component';
import { NguCarouselModule } from '@ngu/carousel';
import { GarantiaComponent } from './components/garantia/garantia.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductComponent,
    DetailproductComponent,
    TabComponent,
    SlideComponent,
    GarantiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    NguCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
