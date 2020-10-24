import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxplotComponent } from './boxplot/boxplot.component';
import { MissingvalueComponent } from './missingvalue/missingvalue.component';
import { NetcdfComponent } from './netcdf/netcdf.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxplotComponent,
    MissingvalueComponent,
    NetcdfComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
