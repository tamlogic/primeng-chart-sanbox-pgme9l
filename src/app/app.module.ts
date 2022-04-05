import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyChartModule } from './../my-p-chart/my-p-chart';
import { ChartModule } from 'primeng/chart';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MyChartModule, ChartModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
