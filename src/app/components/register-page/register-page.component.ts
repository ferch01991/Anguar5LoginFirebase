import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;
  constructor( 
    public authService: AuthService, 
    public router:Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then( (res) => {
      // Se muestra el mensaje que queremos mostrar
      this.flashMensaje.show('Usuario creado correctamente!', 
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['privado'])
      
    }).catch( (err) =>{
      this.flashMensaje.show(err.message, 
      {cssClass: 'alert-danger', timeout: 4000});
      console.log(err);
      
    })
  }

}

