import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  enviarDatos: any = null;

  nombre = new FormControl('', [
    Validators.required,
    Validators.pattern("[a-zA-Z ]*"),
  ])

  apellido = new FormControl('', [
    Validators.required,
    Validators.pattern("[a-zA-Z ]*"),
  ])

  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ])

  telefono = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]*$')
  ])


  dataForm = new FormGroup({
    nombre: this.nombre,
    apellido: this.apellido,
    email: this.email,
    telefono: this.telefono
  })


  // NOMBRE
  get nombreControl() {
    return this.dataForm.controls['nombre'];
  }

  get nombreControlIsInvalid() {
    return this.nombreControl.invalid && this.nombreControl.touched;
  }

  // APELLIDO
  get apellidoControl() {
    return this.dataForm.controls['apellido'];
  }

  get apellidoControlIsInvalid() {
    return this.apellidoControl.invalid && this.apellidoControl.touched;
  }

  // CORREO
  get correoControl() {
    return this.dataForm.controls['email'];
  }

  get correoControlIsInvalid() {
    return this.correoControl.invalid && this.correoControl.touched;
  }

  // TELEFONO
  get telefonoControl() {
    return this.dataForm.controls['telefono'];
  }

  get telefonoControlIsInvalid() {
    return this.telefonoControl.invalid && this.telefonoControl.touched;
  }


  onSubmit() {
    console.log(this.enviarDatos);
    this.enviarDatos = {
      nombre: this.nombre.value,
      apellido: this.apellido.value,
      email: this.email.value,
      telefono: this.telefono.value
    }
  }


}
