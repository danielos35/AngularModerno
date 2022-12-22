import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// PARA USAR HTTP EN ANGULAR IMPORTAMOS EL HTTP CLIENT EN EL MODULO

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly API =
    'https://crudcrud.com/api/9801e556fc35426eb846bcc1d671ca47/data';
  constructor(private readonly http: HttpClient) {}

  addData(data: any): Observable<any> {
    const body = { name: data };
    return this.http.post(this.API, body);
  }

  getData(): Observable<any> {
    return this.http.get(this.API);
  }

  updateData(id: any, data: any): Observable<any> {
    const body = { name: data };
    return this.http.put(`${this.API}/${id}`, body);
  }

  deleteData(id: any): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}
