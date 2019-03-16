import { CapaService } from './../capa.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Capa } from 'src/app/dominio/Capa';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-capa',
  templateUrl: './capa.component.html',
  styleUrls: ['./capa.component.css']
})
export class CapaComponent implements OnInit {

  
  mostarDialogo: boolean = false;
  capa: Capa = new Capa();
  filtro: string = '';
  cols: any[] = [];
  formulario: FormGroup;

  @Input() listaRecebida: Capa[]=[];
  @Output() emissorCapaFilho = new EventEmitter(); 
 
  constructor(private capaService:CapaService, private fb: FormBuilder) { }

  ngOnInit() {

    this.capaService.lista = this.listaRecebida;

    this.formulario = this.fb.group({     
      descricao: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(20)]))
    });

    this.cols = [
      { field: 'idCapa', header: 'ID' },
      { field: 'descricao', header: 'DESCRIÇAO' },
      { field: 'opcoes', header: 'OPÇÔES' }

    ];
  }

 

  novo() {
    this.mostarDialogo = true;
  }

  taNaListat(c : Capa){
    for(let i = 0; i < this.capaService.lista.length; i++){
      if(this.capaService.lista[i].descricao == c.descricao){
        return true;
      } 
    }
    return false;
  }

  create() {
    if( this.listaRecebida.length>=5){
      Swal({
        type: 'warning',
        title: "Atenção",
        text: "Permitido apenas 5 capas por celular!",
        showConfirmButton: false,
        timer: 2500
      });
      return false;
    }
    if( !this.taNaListat(this.capa)){
      this.capaService.add(this.capa);
      this.emissorCapaFilho.emit(this.capaService.lista);
      this.mostarDialogo = false;
      this.capa = new Capa();

    }
      
    }
     modalExcluir(c: Capa) {
    this.capaService.delete(c);
    console.log(this.capaService.lista);
    
    this.emissorCapaFilho.emit(this.capaService.lista);
  }

  

}
