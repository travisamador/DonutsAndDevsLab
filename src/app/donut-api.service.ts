import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonutApiService {
  apiUrl = "https://grandcircusco.github.io/demo-apis/donuts.json"
  singleApiUrl = "https://grandcircusco.github.io/demo-apis/donuts/"

  constructor(private http: HttpClient) { }

  getDonuts():any{
    return this.http.get(this.apiUrl);
  }

  getSingleDonut(id:number):any{
    return this.http.get(this.singleApiUrl + id + ".json");
  }
}
