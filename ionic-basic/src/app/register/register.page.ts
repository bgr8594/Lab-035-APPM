import { Component, OnInit } from '@angular/core';
import { AutenticacionFirebaseService } from '../service/autenticacion-firebase.service';
import { Router } from '@angular/router';
import { User } from '../interface/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(
    private autSvc: AutenticacionFirebaseService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async onRegister(){
    this.autSvc.onRegister(this.user).then(user=>{
      if(user){
        console.log('Successfully created user!');
        this.router.navigate(['/login']);
      }
    }).catch(error=>{
      console.log('Error al crear usuario!');
    })

  }
  onLogin(){
    this.router.navigate(["/login"]);
  }

}
