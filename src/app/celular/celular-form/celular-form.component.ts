import { CelularService } from './../celular.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Celular } from 'src/app/dominio/Celular';
import Swal from 'sweetalert2'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-celular-form',
  templateUrl: './celular-form.component.html',
  styleUrls: ['./celular-form.component.css']
})
export class CelularFormComponent implements OnInit {

  titulo = 'Formulário de Cadastro';
  celular: Celular = new Celular();
  formulario: FormGroup;

  constructor(private cs : CelularService, private fb: FormBuilder,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.formulario = this.fb.group({
     nome : new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(20)]))
    });
    //exemplo de como pega o id:
    const id =  this.activatedRoute.snapshot.paramMap.get('idCelular');


    //exemplo de como pegar o obejeto:
    this.activatedRoute.queryParams.subscribe(resp=>{
      if(resp.celular){
        this.celular = JSON.parse(resp.celular);
    
      }
      
    });
  }

  receberCapa( listaCapa ){
    this.celular.capas = listaCapa;
    console.log(this.celular);
    
  }

  
  novo() {
    this.celular = new Celular();
    
  }

  voltar(){
    this.router.navigate(['celular']);
  }


  atualiza(c: Celular) {
    this.cs.update(c).subscribe(
      dadosDoServido => {
        Swal({
          type: 'success',
          title: "Atualizado",
          text: "Registro Atualizado Com Sucesso!",
          showConfirmButton: false,
          timer: 2500
        });
       this.router.navigate(['/celular']);
       
      }, error => {

      }
    );
  }

  salvar() {
    if( this.celular.capas.length==0){
      Swal({
        type: 'warning',
        title: "Atenção",
        text: "Você precisa adicionar uma capa!",
        showConfirmButton: false,
        timer: 2500
      });
      return false;
    }
    this.cs.create(this.celular).subscribe(
      dadosDoServidor => {
       

        Swal({
          type: 'success',
          title: "Salvo",
          text: "Registro Salvo Com Sucesso!",
          showConfirmButton: false,
          timer: 2500
        });
        this.router.navigate(['/celular']);
        
        
      }, error => {
       if (error.ok == false && error.status == 409 ) {
         let menssagemRecebida:string = error.error.toString();
         if (menssagemRecebida.substr(0,9) == 'Celular'){
          Swal({
            type: 'error',
            title: 'Atenção!',
            text: 'Celular Duplicado!',
            
          })
         }
       }
        
       }
    );
  }

  salvarOuAtualizar() {
    if (this.celular.idCelular) {
      this.atualiza(this.celular);
   
    } else {
      this.salvar();
      
    }
  }
}
