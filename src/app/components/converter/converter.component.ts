import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  kg!: any;
  lb!: any;

  constructor() { }

  ngOnInit(): void {
  }

}



