import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AutenticateService } from '../services/autenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validationMessage={
    email:[
      {type:"required", message:"El email es requerido"},
      {type:"pattern", message:"Formato de email incorrecto"},
    ],
    password:[
      {type:"required", message:"El password es requerido"},
      {type:"minlength", message:"El password debe ser de minimo 5 caracteres"},
    ]
  }
  constructor(private formBuilder: FormBuilder,
    private loginService:AutenticateService) {
    this.loginForm = formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.email
        ])),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])),

    })
  }

  ngOnInit() {
  }

  login(data){
    this.loginService.loginUser(data).then(res => {
      
    })
  }

}
