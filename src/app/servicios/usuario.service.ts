import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiServerUrl= 'https://argprogramajuan.herokuapp.com/usuario';
  
  constructor(private http:HttpClient) { }

  public getUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiServerUrl + '/all');
  }
  
  public detailUsuario(id:number): Observable<Usuario>{
    return this.http.get<Usuario>(this.apiServerUrl + `/detail/${id}`)
  }

  public updateUsuario(id:number, usuario:Usuario):Observable<any>{
    return this.http.put<any>(this.apiServerUrl + `/update/${id}`, usuario);
  }
  
}
