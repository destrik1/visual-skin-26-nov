import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpClient	} from '@angular/common/http'
import { AvatarService } from 'src/app/avatar.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  selectedAvatar: string = '';
  characters = [];
  chunkedCharacters: any[] = [];
  
  constructor(public alertContrller: AlertController, public router: Router,
    private http: HttpClient,
    private avatarService: AvatarService) { }

  ngOnInit(): void {
    this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe(res =>{
      console.log(res);
      this.characters = res.results;
      this.chunkedCharacters = this.chunkArray(this.characters, 2);
    })
    this.avatarService.selectedAvatar$.subscribe((avatar) => {
      this.selectedAvatar = avatar; // Actualizar la variable cuando cambie la imagen
    });
  }
  chunkArray(array: any[], size: number) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }

  setProfilePicture(image: string) {
    this.avatarService.setSelectedAvatar(image);
  }



  async logout() {
    // Eliminar la información de inicio de sesión del almacenamiento local
    localStorage.removeItem('ingresado');
  
    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['/login']); // Ajusta la ruta según tu estructura de rutas
  }
  
}
