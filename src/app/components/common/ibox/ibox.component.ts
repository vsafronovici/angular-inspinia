import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ibox',
  templateUrl: './ibox.component.html',
  styleUrls: ['./ibox.component.css']
})
export class IboxComponent implements OnInit {

  @Input() public colClazz: string
  @Input() public title: string

  constructor() { }

  ngOnInit() {
    console.log('xxx', this.colClazz)
  }

}
