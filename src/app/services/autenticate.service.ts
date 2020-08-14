import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticateService {

  constructor() { }

  loginUser(credentials) {
    return new Promise((acept, reject) => {
      if (credentials.email == "admin@admin.com"
        && credentials.password == "12345") {
        acept("login correcto")
      } else {
        reject("login incorrecto")
      }
    })
  }
}
