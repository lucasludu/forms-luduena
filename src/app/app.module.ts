import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputValidatorComponent } from './components/input-validator/input-validator.component';
import { DataUsuarioComponent } from './components/data-usuario/data-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InputValidatorComponent,
    DataUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
