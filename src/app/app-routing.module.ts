import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { BenchmarksComponent } from './components/benchmarks/benchmarks.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'benchmarks', component: BenchmarksComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
