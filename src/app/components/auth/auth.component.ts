import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  userData;
  loginForm: FormGroup;

  constructor(private users: UsersService,
              private fb: FormBuilder
              ) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });

    // this.users.loginIn().subscribe(responce => console.log(responce),
    //   // this.users.getUser(responce['uid']).subscribe(res => this.userData = res)

    //   reject => console.error(reject)
    //   );
  }

  onSubmitLogin(loginFormData) {
    const dataUser = {
      username: loginFormData.value.name,
      password: loginFormData.value.password,
    };
    this.users.loginIn(dataUser);
  }
}
