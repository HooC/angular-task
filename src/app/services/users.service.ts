import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'http://localhost:2403/users';

  userActive: Object;

  constructor(private http: HttpClient,
              private route: Router) { }

  public getAllUSers() {
    return this.http.get(this.url);
  }

  public loginIn (data) {
    const url = this.url + '/login';

      return this.http.post(url, data)
      .subscribe(
        response => {

          localStorage.setItem('userAuth', 'true');
          this.route.navigateByUrl('dashboard');

          this.getUser(response['uid']).subscribe(
            resp => this.userActive = resp
          );
        },
        rej => console.log('Error loginIn', rej));
  }

  public registrationUser (data) {
    return this.http.post(this.url, data).subscribe(
      response => {
          localStorage.setItem('userAuth', 'true');
          this.route.navigateByUrl('dashboard');
          return response;
      }
    );
  }

  public getUser (id: string) {
    const url = this.url + '/' + id;
    return this.http.get(url);
  }

  public getActiveUserData () {
    console.log(this.userActive);
    return this.userActive;
  }
}
