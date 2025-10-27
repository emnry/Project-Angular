import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User} from '../../../classes/user';
import {AuthService} from '../../../services/user/auth-service';
import {Router, RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-reset-password-page',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './reset-password-page.html',
  styleUrl: './reset-password-page.scss'
})
export class ResetPasswordPage {

  public user : User = new User();

  constructor(private userService: AuthService,
              private router: Router) {}


  sendFormData(){
    this.userService.resetPassword(this.user).subscribe({
      next: data => {
        if (data.code == '200') {
          alert(data.data);
        }
      }
    });

  }

}
