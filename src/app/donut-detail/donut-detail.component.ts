import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { singleDonut } from '../donut';
import { DonutApiService } from '../donut-api.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {

  donut: singleDonut = {} as singleDonut;

  constructor(private DonutApiService: DonutApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));

    this.DonutApiService.getSingleDonut(id).subscribe((response: singleDonut) => {
      this.donut = response;
    });
  }

}
