import { CelularService } from './../celular.service';
import { Celular } from './../../dominio/Celular';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-celular-consulta',
  templateUrl: './celular-consulta.component.html',
  styleUrls: ['./celular-consulta.component.css']
})
export class CelularConsultaComponent implements OnInit {
  lista: Celular[]=[];
  celular: Celular = new Celular();
  mostarDialogo: boolean = false;
  nome: string ='';

  constructor(private cs: CelularService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }


findAll(){
this.cs.findAll().subscribe(dadosDoServidor=>{
  this.lista =dadosDoServidor;  
}, error=>{});
}



excluirPorId(id: number): string {
  let resposta: string;

  this.cs.delete(id).subscribe(dadosDoServidor => {
    Swal({

      type: 'success',
      text: 'Deletado',
      title: 'Registro Excluido Com Sucesso!',
      showConfirmButton: false,
      timer: 2500
    })
    this.findAll();
  }, error => {
  });
  return resposta;
}


modalDelete(id: number) {
  Swal({
    title: "<strong>Atenção</strong>",
    type: "warning",
    html: "<b> Tem certeza que desaja excluir o registro?",
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: "Não",
    cancelButtonAriaLabel: "Thumbs down"

  }).then(ok => {
    if (ok.value) {
      this.excluirPorId(id);
    }
  });
}

novo() {
  this.celular = new Celular();
  this.router.navigate(['celular/cadastro']);
}
chamarFormulario(c: Celular) {
  this.celular = c;
  this.router.navigate(['celular/cadastro'],{
    queryParams: { nome: 'Marcos ', celular: JSON.stringify(c)},
    skipLocationChange: true
  });

}

searchByName(){
  this.cs.searchByName(this.nome).subscribe(dadosDoServidor=>{
  this.lista =dadosDoServidor;
  },
    error=>{});

}
}
