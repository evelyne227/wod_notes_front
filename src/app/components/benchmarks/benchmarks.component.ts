import { Component, OnInit } from '@angular/core';
import { ExercisesService } from 'src/app/services/exercises.service';
import { Exercise } from 'src/app/models/exercises.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.scss']
})
export class BenchmarksComponent implements OnInit {
  public exercisesList!: Exercise[];

  constructor(private exerciseService: ExercisesService, private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(sub_category_id: any){
    this.exerciseService.getAllBySubCat(sub_category_id).subscribe(exercises => 
      {
        this.exercisesList = exercises;
      })
  }

  seeDetails(id: any): void
  {
    this.router.navigate(['benchmarks/details/'+id]);
  }

}
