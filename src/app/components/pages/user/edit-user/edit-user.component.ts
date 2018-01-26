import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from "../../../../services/user/user.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public user: any
  public title: string
  public signupForm: FormGroup
  public statusList = ['ENABLED', 'DISABLED', 'SUSPENDED']

  constructor(private route: ActivatedRoute, private userSerice: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    console.log('uuu', this.route)
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.userSerice.findById(id).subscribe(u => {
      this.user = u
      this.title = `Edit user ${u.name}`
      this.createForm()
    })

    // this.createForm('')
  }

  createForm = () => {
    this.signupForm  = this.fb.group({
      name: [this.user.name, Validators.required],
      lastname: [this.user.lastname, Validators.required],
      email: [this.user.email, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      status: [this.user.status, Validators.required]
    })
  }

  public get email() { return this.signupForm.get('email'); }
  public get lastname() { return this.signupForm.get('lastname'); }
  public get name() { return this.signupForm.get('name'); }

  public onFormSubmit() {
    if(this.signupForm.valid) {
      Object.assign(this.user, {...this.signupForm.value})
      //this.user = this.signupForm.value;
      console.log('saving user', this.user)
      this.userSerice.save(this.user)
    }
  }

  public reset() {
    this.signupForm.reset({...this.user})
  }

}
