import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';

import { UsersService } from './services/users.service';
import { ServerService } from './services/server.service';
import { HomeComponent } from './components/home/home.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { BenchmarksComponent } from './components/benchmarks/benchmarks.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    HomeContentComponent,
    BenchmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
