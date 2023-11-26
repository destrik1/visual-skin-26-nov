import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.page.html',
  styleUrls: ['./foro.page.scss'],
})
export class ForoPage implements OnInit {
  
  onCountrySelected(country: string) {
      // Hacer algo con el país seleccionado, por ejemplo, mostrarlo en la consola
  console.log('País seleccionado:', country);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
