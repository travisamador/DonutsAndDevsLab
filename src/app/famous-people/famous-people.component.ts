import { Component, OnInit } from '@angular/core';
import { HallOfFame } from '../hall-of-fame';
import { HallOfFameApiService } from '../hall-of-fame-api.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {

  people: HallOfFame = {} as HallOfFame;

  constructor(private HallOfFameApiService: HallOfFameApiService) { }

  ngOnInit(): void {
    this.HallOfFameApiService.getHallOfFame().subscribe((response: HallOfFame) => {
      this.people = response;
    });
  }

}
