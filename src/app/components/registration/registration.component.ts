import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { confirmPassword } from './confirmPassword';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private users: UsersService
  ) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      passwordGroup: this.fb.group({
        password: ['', Validators.required],
        cfpassword: ['', Validators.required]
      }, {validator: confirmPassword})
    });
  }

  onSubmit(data) {
    const newRegData = {
      username: data.value.name,
      email: data.value.email,
      password: data.value.passwordGroup.password,
      isAdmin: false
    };

    this.users.registrationUser(newRegData);
  }

  clearForm(e) {
    this.regForm.patchValue({
      name: null,
      email: null,
      passwordGroup: {
        password: null,
        cfpassword: null
      }
    });

    e.preventDefault();
  }
}
