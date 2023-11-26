import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})  
  export class RegistroPage implements OnInit{
    nuevoUsuario: { nombre: string, password: string,email: string, confirmacionPassword: string } = { nombre: '', password: '' ,email:'',confirmacionPassword:''};

  formularioRegistro:FormGroup;
  constructor(public fb: FormBuilder, public alertContrller:AlertController, public router: Router){
  
    this.formularioRegistro=this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async agregarUsuario() {
    var f = this.formularioRegistro.value;
  
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertContrller.create({
        header: "Validación del formulario",
        message: "Debes llenar todos los campos",
        buttons: ["OK"]
      });
      await alert.present();
    } else {
      // Obtener usuarios existentes del localStorage o inicializar un array vacío
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
  
      // Verificar si ya existe un usuario con el mismo nombre
      const usuarioExistente = usuarios.find((usuario: any) => usuario.nombre === f.nombre);
  
      if (usuarioExistente) {
        const alert = await this.alertContrller.create({
          header: "Error",
          message: "Ya existe un usuario con este nombre",
          buttons: ["OK"]
        });
  
        await alert.present();
      } else {
        // Si no existe un usuario con el mismo nombre, agrega el nuevo usuario
        var nuevoUsuario = {
          nombre: f.nombre,
          email: f.email,
          password: f.password,
          confirmacionPassword: f.confirmacionPassword
        };
  
        // Agregar el nuevo usuario al array
        usuarios.push(nuevoUsuario);
  
        // Guardar el array actualizado en el localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
        const alert = await this.alertContrller.create({
          header: "Usuario",
          message: "Usuario creado correctamente",
          buttons: ["OK"]
        });
  
        await alert.present();
        this.router.navigate(["/login"]);
      }
    }
  }
 }
