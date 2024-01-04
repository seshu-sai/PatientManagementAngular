import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component'


const routes: Routes = [

{path: 'create-patient', component: CreatePatientComponent},
{path: 'patients', component: ListPatientComponent},
{path: '', redirectTo: 'patients', pathMatch: 'full'},
{path: 'update-patient', component: UpdatePatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
