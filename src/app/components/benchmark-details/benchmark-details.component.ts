import { Component, OnInit, Input } from '@angular/core';
import { ExercisesService } from 'src/app/services/exercises.service';
import { Exercise } from 'src/app/models/exercises.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-benchmark-details',
  templateUrl: './benchmark-details.component.html',
  styleUrls: ['./benchmark-details.component.scss']
})
export class BenchmarkDetailsComponent implements OnInit {
  exercise!: Exercise;

  constructor(private exerciseService: ExercisesService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    if(this.route.snapshot.params["id"])
    {
      this.exerciseService.getOneById(this.route.snapshot.params["id"]).subscribe(m => 
        {
          this.exercise = m;
        });
    }
  }

}
