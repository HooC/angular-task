import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  idUser;
  userData;

  constructor(private user: UsersService) { }

  ngOnInit() {

      if (this.user.getActiveUserData()) {
        this.idUser = this.user.getActiveUserData();
        console.log(this.idUser);
      }
  }
}
