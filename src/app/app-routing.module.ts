import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './input/input.component';


const routes: Routes = [
  {path:'',redirectTo: '/login',pathMatch: 'full' },
  {path:'login', component: LoginComponent},
  {path: 'todo-list',component: InputComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
