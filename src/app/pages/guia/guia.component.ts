import { Component, OnInit } from '@angular/core';
import { GuiaModel } from 'src/app/models/guia.model';
import { NgForm } from '@angular/forms';
import { GuiasService } from 'src/app/services/guias.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.css']
})
export class GuiaComponent implements OnInit {

guia = new GuiaModel();

  constructor(private guiaService: GuiasService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
       this.guiaService.getGuia(id)
       .subscribe((resp: GuiaModel) => {
          console.log(resp);
          this.guia = resp;
          this.guia.id = id;
       });
    }

  }

  guardar(form: NgForm) {
      if (form.invalid) {
        console.log('falta llenar algunos campos');
        return;
      }

      Swal.fire({
        title: 'Espere',
        text: 'Guardando Informacion',
        type: 'info',
        allowOutsideClick: false
      });
      // tslint:disable-next-line:no-unused-expression
      Swal.showLoading;

      let peticion: Observable <any>;

      if (this.guia.id) {
        peticion = this.guiaService.updateGuia(this.guia);
      } else {
        peticion = this.guiaService.insertGuia(this.guia);
      }

      peticion.subscribe(respone => {
          Swal.fire({
             title: this.guia.title + ' ' + this.guia.content,
             text: 'Se actualizo correctamente',
             type: 'success'
          });
      });
  }

}
