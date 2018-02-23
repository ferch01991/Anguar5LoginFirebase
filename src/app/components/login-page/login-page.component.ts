import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
//import { FlashMessagesService } from 'angular2-flash-message';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService, 
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.flashMensaje.show('Usuario logeado correctamente', 
        {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['privado']);
    }).catch( (err) =>{
      this.flashMensaje.show(err.message, 
        {cssClass: 'alert-danger', timeout: 4000});
      console.log(err);
    })
  }

  onClickGoogleLogin(){
    this.authService.loginGoogle()
      .then( (res) =>{
        this.router.navigate(['privado']);
      }).catch( err => console.log(err.message));
  }

  onClickFacebookLogin(){
    this.authService.loginFacebook()
      .then((res) =>{
        this.router.navigate(['privado'])
      }).catch( (err => console.log(err.message)))
  }

}
