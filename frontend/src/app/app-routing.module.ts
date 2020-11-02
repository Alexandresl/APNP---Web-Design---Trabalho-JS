import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { StudentsCrudComponent } from './views/students-crud/students-crud.component'
import { StudentCreateComponent } from './components/students/student-create/student-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "students",
    component: StudentsCrudComponent
  },
  {
    path: "students/create",
    component: StudentCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
