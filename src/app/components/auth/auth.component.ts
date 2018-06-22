import { Component, OnInit, Output } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private users: UsersService,
              private fb: FormBuilder,
              private route: Router
              ) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmitLogin(loginFormData) {
    const dataUser = {
      username: loginFormData.value.name,
      password: loginFormData.value.password,
    };

    this.users.loginIn(dataUser);
  }
}
