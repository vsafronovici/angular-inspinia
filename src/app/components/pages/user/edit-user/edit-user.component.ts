import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from "../../../../services/user/user.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public user: any

  constructor(private route: ActivatedRoute, private userSerice: UserService) { }

  ngOnInit() {
    console.log('uuu', this.route)
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.userSerice.findById(id).subscribe(x => {
      console.log('user=', x)
      this.user = x
    })

  }

}
