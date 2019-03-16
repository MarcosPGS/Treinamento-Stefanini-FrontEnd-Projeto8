import { Injectable } from '@angular/core';
import { Capa } from '../dominio/Capa';

@Injectable({
  providedIn: 'root'
})
export class CapaService {
  lista: Capa[] = [];
  listaAux: Capa[] = [];
  filtrando: boolean = false;

  constructor() { }

  add(c: Capa){
    this.lista.push(c);  
   
 }

delete(c: Capa){
let posicaoArray = this.lista.indexOf(c);
 this.lista = this.lista.filter((tel, posicao)=>{
   if (posicao != posicaoArray){
     return tel;
   }
});
}




excluir(c: Capa){
for(let i = 0; i <= this.lista.length; i++){
  if(this.lista[i].descricao == c.descricao ){
   this.lista.splice(i, 1);
  }
}
}



find(c : Capa ): number{
  let posicao = this.lista.indexOf(c);
  return posicao;
}
pesquisar(n: string)  : boolean {
  
  
  if (! this.filtrando)  {
    this.listaAux = this.lista;
    this.filtrando = true;
  }
    
  
  if(n.length == 0){
    this.lista = this.listaAux;
    //this.listaAux = [];
    this.filtrando = false;
    return false;
  } 
  this.lista = this.lista.filter((capa, index)=>{
  
  let tam = n.length;
  
  let parteDodescricao= capa.descricao.substr(0,tam);

 if(parteDodescricao == n){
    return true;
  }else{  
    return false;

  }

 });
 return true;
}

}

