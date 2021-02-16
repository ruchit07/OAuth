import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Constant } from 'src/app/shared/class/constant';

/**
 * Admin user interface
 */
export interface IUser {
  UserName: string;
  Password: string;
  ConfirmPassword: string;
}

/**
 * Admin user class
 */
export class User implements IUser {
  UserName: string;
  Password: string;
  ConfirmPassword: string;

  /**
  * Form
  */
  public form: FormGroup;

  constructor(private _formBuilder: FormBuilder,) { }

  /**
   * Create forn by builder
   */
  createForm() {
    this.form = this._formBuilder.group({
      FirstName: new FormControl('', [Validators.required]),
      MiddleName: new FormControl(''),
      LastName: new FormControl('', [Validators.required]),
      Phone: new FormControl('', [Validators.required, Validators.pattern(Constant.PhonePattern)]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      UserName: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      ConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    }, { validator: User.MatchPassword });
  }

  get(data: IUser) {
    this.UserName = data.UserName;
    this.Password = data.Password;
    this.createForm();
    this.form.patchValue(this);
    return this;
  }

  static MatchPassword(control: AbstractControl) {
    let password = control.get('Password').value;
    let confirmPassword = control.get('ConfirmPassword').value;
    if (password !== confirmPassword)
      control.get('ConfirmPassword').setErrors({ ConfirmPassword: true });
    else
      return null;
  }
}