import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ibox',
  templateUrl: './ibox.component.html',
  styleUrls: ['./ibox.component.css']
})
export class IboxComponent implements OnInit {

  @Input() colClazz: string

  constructor() { }

  ngOnInit() {
  }

}
