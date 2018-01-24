import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'nav-path',
  templateUrl: './nav-path.component.html',
  styleUrls: ['./nav-path.component.css']
})
export class NavPathComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    console.log('----route=', this.route)
    console.log('----location=', this.location)
  }

}
