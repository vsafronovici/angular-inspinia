import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public title: string = 'Users list'
  public users: any[]

  constructor(private userSerice: UserService) { }

  ngOnInit() {
    this.userSerice.getUsers().subscribe(x => {
      this.users = x
    })
  }

  changeStatus(id) {
    console.log('changeStatus id=', id)
    const user = this.users.find(u => u.id === id)
    if (user.status === 'ENABLED') {
      user.status = 'DISABLED'
    } else {
      user.status = 'ENABLED'
    }
  }

}
