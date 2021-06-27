import { Component, OnInit } from '@angular/core';
import { Prs } from 'src/app/models/prs.model';
import { PrsService } from 'src/app/services/prs.service';

@Component({
  selector: 'app-prs',
  templateUrl: './prs.component.html',
  styleUrls: ['./prs.component.scss']
})
export class PRsComponent implements OnInit {
  prsList!: Prs[];

  constructor(private prsService: PrsService) { }

  ngOnInit(): void {
    this.prsService.getAll().subscribe(prs => 
      {
        this.prsList = prs;
      })
  }



}
