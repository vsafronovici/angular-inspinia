import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'navpath',
  templateUrl: './nav-path.component.html',
  styleUrls: ['./nav-path.component.css']
})
export class NavPathComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }
  public linkPaths: any[]
  public lastPath: string


  ngOnInit() {
    console.log('----location=', this.location)
    const path: string = this.location.path()
    console.log('----path=', path)
    const splits: string[] = path.split('/')
    this.lastPath = splits.pop()
    this.linkPaths = splits.filter(o => o.length > 0)
  }



}
