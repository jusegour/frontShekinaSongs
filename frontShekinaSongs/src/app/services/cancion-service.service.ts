import { Injectable } from '@angular/core';
import { Cancion } from '../models/cancion.model';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CancionServiceService {

  private urlBackend = "https://shekinasongs.herokuapp.com/canciones";
  public Canciones:Cancion[];
  
  constructor(private httpClient: HttpClient) { }

  public getCancionesFiltro(filtro:string,valor:string):Observable<any>{
    const url = `${this.urlBackend}/obtener/${filtro}/${valor}`;   
    console.log(url);
    return this.httpClient.get(url);
  }

  public getCanciones():Observable<any>{
    const url = `${this.urlBackend}/`;
    return this.httpClient.get(url);
  }

  public saveCanciones(cancion:any):Observable<any>{
    const url = `${this.urlBackend}/crear`;
    const json = JSON.stringify(cancion);
    
    const body = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.httpClient.post(url,body,{headers: headers});
  }
}
