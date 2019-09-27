import { NgModule } from '@angular/core';
import{Routes, RouterModule} from '@angular/router'
import { GuiasComponent } from './pages/guias/guias.component';
import { GuiaComponent } from './pages/guia/guia.component';

const routes:Routes=[
   {path:'guias',component:GuiasComponent},
   {path:'guia/:id',component:GuiaComponent},
   {path:'**',pathMatch:'full',redirectTo:'guias'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
