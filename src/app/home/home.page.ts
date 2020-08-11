import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOps = {
    initialSlide: 0,
    slidesPreview:1,
    centerSlides: true,
    speed: 400
  }

  slides= [
    {
      tittle:'App musical',
      subTitle:'Reproduce contenido',
      description:'Por: Cristian Covarrubias',
      icon:'play'
    },
    {
      tittle:'Video integrado',
      subTitle:'Reproductor de video',
      description:'si, como spotify',
      icon:'videocam-outline'
    },
    {
      tittle:'Comenzamos',
      subTitle:'',
      description:'',
      icon:'play'
    },
]
  constructor() {}

}
