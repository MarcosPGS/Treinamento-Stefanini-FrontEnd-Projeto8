import { Celular } from './../dominio/Celular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CelularService {

  HOST: string;
  PORTA_SERVICO: string;
  NS_CELULAR:string = '/celular';
  URL: string;
  constructor(private http: HttpClient) {
    this.HOST = environment.apiUrl;
    this.PORTA_SERVICO = environment.porta
    this.URL= `${this.HOST}${this.PORTA_SERVICO}`;
   }
   getHeaders(){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return headers;
  }
  findAll(): Observable<Celular[]>{
  return this.http.get<Celular[]>(`${this.URL}${this.NS_CELULAR}`);
  }
  searchByName(nome: string): Observable<Celular[]>{
   return this.http.get<Celular[]>(`${this.URL}${this.NS_CELULAR}/${nome}`);
  }
  
  create(c: Celular): Observable<Celular>{
   return this.http.post<Celular>(`${this.HOST}${this.PORTA_SERVICO}${this.NS_CELULAR}`,c);
  }
  
  update(c: Celular): Observable<Celular>{
    console.log(c);
    
    return this.http.put<Celular>(`${this.HOST}${this.PORTA_SERVICO}${this.NS_CELULAR}`,c);
   }
   delete(id: number): Observable<string>{
  return this.http.delete<string>(`${this.HOST}${this.PORTA_SERVICO}${this.NS_CELULAR}/${id}`)
   }
  }
