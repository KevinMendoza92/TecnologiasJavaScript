import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})
export class ClimateComponent implements OnInit {

  @Input() climate: string;
  constructor() { }

  ngOnInit() {
  }

}