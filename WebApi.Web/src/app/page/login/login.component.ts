import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/component/base-component/base.component';
import { LoginService } from './login.service';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorMessage } from 'src/app/shared/service/error-message.service';
import { Result } from 'src/app/shared/class/result';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  public user: User;
  public isLoading: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _errorMessage: ErrorMessage,
    private _router: Router,
    private _snackBar: MatSnackBar) {
    super(_snackBar)
  }

  ngOnInit() {
    this.initialization();
  }

  initialization() {
    this.user = new User(this._formBuilder);
    this.user.createForm();
  }

  login() {
    if (this.user.form.controls['UserName'].errors?.required || this.user.form.controls['Password'].errors?.required) {
      this.showError(this._errorMessage.error("RectifyErrors"), "X")
      return false;
    }

    this.process()
  }

  process() {
    this.isLoading = true;
    this._loginService.login(this.user.form.value).subscribe(
      data => {
        if (data && data.access_token) {
          this._loginService.setLoggedInUser(data);
          this._router.navigate(['/dashboard']);
        }
        else {
          this.showError("Something went wrong while authenticating user. Please try again later.", "X");
        }
      },
      e => {
        this.isLoading = false;
        this.showError(e.error.error_description, "X");
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}
