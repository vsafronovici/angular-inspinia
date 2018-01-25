import { Injectable } from '@angular/core';

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
        status: 'ENABLED'
      })
    }
  }

  getUsers() {
    return this.users
  }

}
