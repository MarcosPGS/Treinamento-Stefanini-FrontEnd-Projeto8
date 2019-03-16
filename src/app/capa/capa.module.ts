import { CapaService } from './capa.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapaComponent } from './capa/capa.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [CapaComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule
  ],exports:[CapaComponent],
  providers:[CapaService]
})
export class CapaModule { }
