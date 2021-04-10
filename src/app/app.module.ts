import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './components/topo/topo.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule  } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SobreComponent } from './components/sobre/sobre.component';
import { PrincipaisEscolhasComponent } from './components/principais-escolhas/principais-escolhas.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { LoginComponent } from './components/login/login.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    MenuComponent,
    LogoComponent,
    ProdutosComponent,
    SobreComponent,
    PrincipaisEscolhasComponent,
    TituloComponent,
    ClientesComponent,
    LocalizacaoComponent,
    RodapeComponent,
    LoginComponent,
    CardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
