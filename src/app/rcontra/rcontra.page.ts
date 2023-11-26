import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rcontra',
  templateUrl: './rcontra.page.html',
  styleUrls: ['./rcontra.page.scss'],
})
export class RcontraPage implements OnInit {

  formularioRecuperar: FormGroup;
  usuarios: any[] = [
    { nombre: 'usuario1', password: 'password1' },
    { nombre: 'usuario2', password: 'password2' },
    // Agrega más usuarios aquí
  ];
  constructor(private alertContrller: AlertController) {
    this.formularioRecuperar = new FormGroup({
      nombre: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }
  async recuperarContrasena() {
    const nombreUsuario = this.formularioRecuperar.get('nombre')?.value;
  
    // Obtener usuarios registrados del localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
  
    // Buscar al usuario por nombre de usuario
    const usuario = usuarios.find((u: any) => u.nombre === nombreUsuario);
  
    if (usuario) {
      // Mostrar la contraseña del usuario en una alerta
      const alert = await this.alertContrller.create({
        header: "Contraseña recuperada",
        message: `La contraseña del usuario ${usuario.nombre} es: ${usuario.password}`,
        buttons: ["OK"]
      });
  
      await alert.present();
    } else {
      // Si no se encontró el usuario, muestra un mensaje de error
      const alert = await this.alertContrller.create({
        header: "Usuario no encontrado",
        message: "No se encontró ningún usuario con ese nombre de usuario",
        buttons: ["OK"]
      });
  
      await alert.present();
    }
  }
 }