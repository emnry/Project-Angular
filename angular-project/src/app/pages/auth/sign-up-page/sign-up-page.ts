import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User} from '../../../classes/user';
import {AuthService} from '../../../services/user/auth-service';
import {Router, RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-sign-up-page',
  imports: [FormsModule, RouterLink, CommonModule
  ],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.scss'
})
export class SignUpPage {

  public user : User = new User();

  public error:string = '';

  constructor(private userService: AuthService,
              private router: Router) {}

  sendFormData(){
    this.userService.signUp(this.user).subscribe({
      next: data => {
        if (data.code == '200') {

          this.userService.login(data.data).subscribe({
            next: response => {
              if (response.code == '200') {

                alert(response.message);
                this.router.navigate(['/articles']);
              }
              else{
                this.error = response.message;
              }
            }
          });
        }
        else{
          this.error = data.message;
        }
      }
    });


  }


}
