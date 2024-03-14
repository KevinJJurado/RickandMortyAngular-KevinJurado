import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoaderComponent } from './components/loader/loader.component';
import { LocationComponent } from './components/location/location.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ResidentcardComponent } from './components/residentcard/residentcard.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LocationComponent,
    PaginationComponent,
    ResidentcardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
