import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complete, HallOfFame } from '../hall-of-fame';
import { HallOfFameApiService } from '../hall-of-fame-api.service';

@Component({
  selector: 'app-famous-person-detail',
  templateUrl: './famous-person-detail.component.html',
  styleUrls: ['./famous-person-detail.component.css']
})
export class FamousPersonDetailComponent implements OnInit {

  person: Complete = {} as Complete;

  constructor(private HallOfFameApiService: HallOfFameApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let name:string = String(routeParams.get("name"));
    this.HallOfFameApiService.getHallOfFame().subscribe((response: HallOfFame) => {
      this.person = <Complete>response.complete.find(c => c.firstName + c.lastName == name);;
    });
  }

}
