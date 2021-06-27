import { Component, OnInit } from '@angular/core';
import { WodPerso } from 'src/app/models/perso.model';
import { PersoService } from 'src/app/services/perso.service';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.scss']
})
export class PersoComponent implements OnInit {
  persoList!: WodPerso[];

  constructor(private persoService: PersoService) { }

  ngOnInit(): void {
    this.persoService.getAll().subscribe(perso => 
      {
        this.persoList = perso;
      })
  }

}
