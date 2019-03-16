import { CapaModule } from './../capa/capa.module';
import { CelularService } from './celular.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelularConsultaComponent } from './celular-consulta/celular-consulta.component';
import { CelularFormComponent } from './celular-form/celular-form.component';

// PrimeNG
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/components/table/table';
import {TooltipModule} from 'primeng/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CelularConsultaComponent, CelularFormComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    CapaModule
  ], exports:[CelularConsultaComponent, CelularFormComponent],
  providers:[CelularService]
})
export class CelularModule { }
