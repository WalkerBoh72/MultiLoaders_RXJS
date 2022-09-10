import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoadingComponent } from './loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingService } from './loading/loading.service';
import { DataComponent } from './data/data.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, LoadingComponent, DataComponent],
  bootstrap:    [ AppComponent ],
  providers: [LoadingService]
})
export class AppModule { }
