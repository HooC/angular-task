import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { reject } from 'q';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'http://localhost:2403/users';

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
          return response;
        },
        rej => console.log('Error loginIn', rej));
  }

  public getUser (id: string) {
    const url = this.url + '/' + id;

    return this.http.get(url).pipe(map(i => console.log(i))
    );
  }
}
