import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { first } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url="http://localhost:3000/locations";
  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
  const data= await fetch(this.url);
  return await data.json() ?? [];
  }
  async getHousingLoacationByid(id: Number):Promise<HousingLocation | undefined> {
  const data= await fetch(`${this.url}/${id}`)
  return await data.json() ?? {};
  }
  submitForm(firstName:string,lastname:string,email:string) {
   alert(firstName+" , "+lastname+" , "+email);
  }
}
