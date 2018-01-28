import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {Rest} from "../../utils/rest";

import { Response } from '@angular/http';

@Injectable()
export class UserService {

  //private users: any[] = []


  constructor(private rest: Rest) {
    /*for (let i = 1; i < 10; i++) {
      this.users.push({
        id: i,
        name: `name${i}`,
        lastname: `lastname${i}`,
        email: `mail${i}@yahoo.com`,
        role: i % 3 == 0 ? 'ADMIN' : 'USER',
        status: i % 4 == 0 ? 'ENABLED' :  i % 3 == 0 ? 'DISABLED' : 'SUSPENDED'
      })
    }*/
  }

  getUsers(): Observable<any[]> {
    // simulate AJAX call
    //return Observable.of(this.users).delay(500)
    return this.rest.GET('/users').map(resp => this.mapToUsers(resp))
  }

  findById(id: number): Observable<any> {
    //const user = this.users.find(u => u.id === id)
    // simulate AJAX call
    //return Observable.of(user).delay(500)
    return this.rest.GET(`/user/${id}`).map(resp => this.mapToUser(resp))
  }

  save(user): Observable<any> {
    // const usr = this.users.find(u => u.id === user.id)
    // Object.assign(usr, {...user})
    return this.rest.POST(`/user/${user.id}`, user).map(resp => resp._embedded.status)
  }

  mapToUsers = (resp) => {
    console.log('---resp=', resp)
    return resp._embedded.user
  }

  mapToUser = (resp) => {
    console.log('------resp=', resp)
    return resp._embedded.user
  }

}
