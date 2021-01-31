import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-full-info',
  templateUrl: './full-info.component.html',
  styleUrls: ['./full-info.component.css']
})
export class FullInfoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
