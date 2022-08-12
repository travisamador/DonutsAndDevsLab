import { Component, OnInit } from '@angular/core';
import { Donut } from '../donut';
import { DonutApiService } from '../donut-api.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  donuts: Donut = {} as Donut;

  constructor(private DonutApiService:DonutApiService) { }

  ngOnInit(): void {
    this.DonutApiService.getDonuts().subscribe((response: Donut) => {
      this.donuts = response;
    })
  }

}
