import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { BenchmarksComponent } from './components/benchmarks/benchmarks.component';
import { BenchmarkDetailsComponent } from './components/benchmark-details/benchmark-details.component';
import { PersoComponent } from './components/perso/perso.component';
import { PRsComponent } from './components/prs/prs.component';
import { ConverterComponent } from './components/converter/converter.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'benchmarks', component: BenchmarksComponent },
  { path: 'benchmarks/details/:id', component: BenchmarkDetailsComponent },
  { path: 'mes-wods', component: PersoComponent },
  { path: 'prs', component: PRsComponent },
  { path: 'convert', component: ConverterComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
