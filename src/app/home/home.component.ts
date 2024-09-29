import { Component,inject } from '@angular/core';
import { HousingLoactionComponent } from '../housing-loaction/housing-loaction.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLoactionComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by City" #filter>
        <button class="primary" type="submit" (click)="filterResults(filter.value)" >Search</button>
      </form>
    </section>

    <section class="results">

    @for(hlocation of filteredLocationList; track hlocation.id){
      <app-housing-loaction
        [housingLocation]="hlocation" > 
      </app-housing-loaction>
    }  
    </section>
   
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  housingLocationList:HousingLocation[]=[];
  filteredLocationList:HousingLocation[]=[];
  housingService : HousingService = inject(HousingService);
  
  constructor (){
    this.housingService.getAllHousingLocations().then((housingLocationList:HousingLocation[]) => 
    {
      this.housingLocationList=housingLocationList;
      this.filteredLocationList=housingLocationList;
    });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    } else {
      this.filteredLocationList = this.housingLocationList.filter(housingLocation =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
}
