import { Component, OnInit } from '@angular/core';
import { GuiasService } from 'src/app/services/guias.service';
import { GuiaModel } from 'src/app/models/guia.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guias',
  templateUrl: './guias.component.html',
  styleUrls: ['./guias.component.css']
})
export class GuiasComponent implements OnInit {
  guias:GuiaModel[]=[];
  cargando=false;

  constructor(private guiaService:GuiasService) { }

  ngOnInit() {
    this.cargando=true;
    this.guiaService.getGuias().subscribe(response=>{
      console.log('servicio: ', response);
      this.guias = response;
      this.cargando=false;
    });
  }

  borrarHeroe(guia:GuiaModel,i:number){
    Swal.fire({
      title:'Esta seguro?',
      text:`Estas seguro que desea borrar la guia ${guia.title} ${guia.content}`,
      type:'question',
      showConfirmButton:true,
      showCancelButton:true
    }).then(resp=>{
        if(resp.value){
          this.guias.splice(i,1);
          this.guiaService.deleteGuia(guia.id).subscribe();
        }
    });
  }

}
