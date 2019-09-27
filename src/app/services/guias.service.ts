import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GuiaModel } from '../models/guia.model';
import { map, delay } from 'rxjs/operators';
import { Key } from 'protractor';
import { GuiasComponent } from '../pages/guias/guias.component';


@Injectable({
  providedIn: 'root'
})
export class GuiasService {

private url = 'http://localhost:8080/api/guias';

  constructor(private htpp: HttpClient) {

  }

insertGuia(guia: GuiaModel) {
    return this.htpp.post(`${this.url}`, guia)
    .pipe(
       map((response: any) => {
         guia.id = response.id;
         return guia;
       })
    );
}

updateGuia(guia: GuiaModel) {
  const guiaTemporal = {
    ...guia
  };

  delete guiaTemporal.id;
  return this.htpp.put(`${this.url}/${guia.id}`, guiaTemporal);
}

deleteGuia(id: string ) {
   return this.htpp.delete(`${this.url}/${id}`);
}

getGuia(id: string) {
   return this.htpp.get(`${this.url}/${id}`);
}

getGuias() {
   return this.htpp.get(`${this.url}`)
   .pipe(
      map(this.crearArreglo),
      delay(1500)
   );
}

private crearArreglo(guiasObject: object) {

  console.log('my arreglo:L ', guiasObject);

  const guias: GuiaModel[] = [];
  console.log(guiasObject);
  if (guiasObject === null) { return []; }

  Object.keys(guiasObject).forEach(key => {
     const guia: GuiaModel = guiasObject[key];
     guias.push(guia);
 });
  return guias;
}

}
