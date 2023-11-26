import { Component, OnInit } from '@angular/core';
import { HttpClient	} from '@angular/common/http'
import { AvatarService } from 'src/app/avatar.service';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.page.html',
  styleUrls: ['./icons.page.scss'],
})
export class IconsPage implements OnInit {

  selectedAvatar: string = '';
  characters = [];
  chunkedCharacters: any[] = [];

  constructor(
    private http: HttpClient,
    private avatarService: AvatarService
  ) { }

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
}

