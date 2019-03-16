import { AppRoutingModule } from './app-routing/app-routing.module';

import { CapaService } from './capa/capa.service';
import { CapaModule } from './capa/capa.module';
import { CelularService } from './celular/celular.service';
import { CelularModule } from './celular/celular.module';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// primeNG
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CelularModule,
    CapaModule,
    InputTextModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    TooltipModule,
    AppRoutingModule
   
  ],
  providers: [CelularService, CapaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
