import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class UserService {

  private users: any[] = []


  constructor() {
    for (let i = 1; i < 10; i++) {
      this.users.push({
        id: i,
        name: `name${i}`,
        lastname: `lastname${i}`,
        email: `mail${i}@yahoo.com`,
        role: i % 3 == 0 ? 'ADMIN' : 'USER',
        status: i % 4 == 0 ? 'ENABLED' :  i % 3 == 0 ? 'DISABLED' : 'SUSPENDED'
      })
    }
  }

  getUsers(): Observable<any[]> {
    // simulate AJAX call
    return Observable.of(this.users).delay(500)
  }

  findById(id: number): Observable<any> {
    const user = this.users.find(u => u.id === id)
    // simulate AJAX call
    return Observable.of(user).delay(500)
  }

  save(user) {
    /*const idx = this.users.findIndex(u => u.id === user.id)
    const oldUser = this.users[idx]
    this.users[idx] = user*/
    const usr = this.users.find(u => u.id === user.id)
    Object.assign(usr, {...user})
  }

}
