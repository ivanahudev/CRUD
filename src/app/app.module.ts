import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuiasComponent } from './pages/guias/guias.component';
import { GuiaComponent } from './pages/guia/guia.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import { GuiasService } from './services/guias.service';


@NgModule({
  declarations: [
    AppComponent,
    GuiasComponent,
    GuiaComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GuiasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
