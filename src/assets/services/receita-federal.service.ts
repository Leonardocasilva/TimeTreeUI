import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroment';
import { IReceita } from '../interface/IReceita';

@Injectable({
  providedIn: 'root'
})
export class ReceitaFederalService {
  private api: string = environment.receitaApi;

  constructor(private http: HttpClient) { }

  getCompanyDataFromReceita(document: string): Observable<IReceita> {
    return this.http.get<IReceita>(`${this.api}/cnpj/${document}`)
  }
}
