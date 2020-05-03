import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HeaderComponent } from './header/header.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    NavegacaoComponent,
    HomeComponent,
    FooterComponent,
    NaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: '**', component: NaoEncontradoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
