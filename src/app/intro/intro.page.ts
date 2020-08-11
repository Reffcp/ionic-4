import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage'
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
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
  constructor(private router :Router, private storage:Storage) { }

  ngOnInit() {
  }

  finish(){
    this.storage.set('isIntroShowed',true);
    this.router.navigateByUrl('/home');
  }

}
