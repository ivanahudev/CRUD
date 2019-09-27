import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuiasComponent } from './pages/guias/guias.component';
import { GuiaComponent } from './pages/guia/guia.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GuiasService } from './services/guias.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaComponent } from 'src/app/tabla/tabla.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    GuiasComponent,
    GuiaComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    CommonModule
  ],
  providers: [
    GuiasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
