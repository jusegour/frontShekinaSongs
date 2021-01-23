import { Injectable } from '@angular/core';
import { Cancion } from '../models/cancion.model';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CancionServiceService {

  private urlBackend = "http://192.168.0.15:3000/canciones";
  public Canciones:Cancion[];
  
  headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*').set("Access-Control-Allow-Headers","X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method").set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE").set("Allow", "GET, POST, OPTIONS, PUT, DELETE");

  constructor(private httpClient: HttpClient) { }

  public getCancionesFiltro(filtro:string,valor:string){
    const url = `${this.urlBackend}/obtener/${filtro}/${valor}`;
    this.httpClient.get(url).subscribe(apiData => apiData);
  }

  public getCanciones():Observable<any>{
    const url = `${this.urlBackend}/`;
    return this.httpClient.get(url);
  }
}
