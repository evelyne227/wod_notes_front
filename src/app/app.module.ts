import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { BenchmarksComponent } from './components/benchmarks/benchmarks.component';
import { BenchmarkDetailsComponent } from './components/benchmark-details/benchmark-details.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { PRsComponent } from './components/prs/prs.component';
import { PersoComponent } from './components/perso/perso.component';
import { ConverterComponent } from './components/converter/converter.component';
import { WeightConverterPipe } from './pipes/weight-converter.pipe';

import { UsersService } from './services/users.service';
import { ServerService } from './services/server.service';
import { ExercisesService } from './services/exercises.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Nl2brPipe } from './pipes/nl2br.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    HomeContentComponent,
    BenchmarksComponent,
    BenchmarkDetailsComponent,
    CreateUserComponent,
    PRsComponent,
    PersoComponent,
    ConverterComponent,
    WeightConverterPipe,
    Nl2brPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UsersService,
    ServerService,
    ExercisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
