import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { GuiaModel } from 'src/app/models/guia.model';
import {GuiasService} from 'src/app/services/guias.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  providers: [DatePipe]
})
export class TablaComponent implements OnInit {
  cargando = false;
  // tslint:disable-next-line:member-ordering
  displayedColumns: string[] = ['select', 'id', 'title', 'content', 'createdAt', 'updatedAt', 'action'];
  // tslint:disable-next-line:member-ordering
  dataSource = new MatTableDataSource<GuiaModel>();
  // tslint:disable-next-line:member-ordering
  selection = new SelectionModel<GuiaModel>(true, []);

  constructor(private guia: GuiasService, protected datepipe: DatePipe ) {
  }
  ngOnInit() {
    this.cargando = true;
    this.guia.getGuias().subscribe(respGuia => {
      console.log(respGuia);
      console.log('hola');
      this.dataSource.data = respGuia;
      this.cargando = false;
    });
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: GuiaModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  borrarHeroe(guia: GuiaModel, i: number) {
    Swal.fire({
      title: 'Esta seguro?',
      text: `Estas seguro que desea borrar la guia ${guia.title} ${guia.content}`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
        if (resp.value) {
          this.dataSource.data.splice(i, 1);
          this.guia.deleteGuia(guia.id).subscribe();
        }
    });
  }
}
