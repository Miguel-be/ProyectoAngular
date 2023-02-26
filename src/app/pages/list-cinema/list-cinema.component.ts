import { Component } from '@angular/core';
import { Cinema } from 'src/app/core/services/cinemas/cinema.model';
import { CinemaService } from 'src/app/core/services/cinemas/cinema.service';

@Component({
  selector: 'app-list-cinema',
  templateUrl: './list-cinema.component.html',
  styleUrls: ['./list-cinema.component.scss']
})
export class ListCinemaComponent {
  public lcinemas:Cinema[]=[];    
  public find:string="";
 
  constructor(private cinemaService: CinemaService){    
  }

  //Recoge el listado de cines que hay en el API.
  public ngOnInit(): void { 
    this.cinemaService.getCinema().subscribe((value)=>this.lcinemas=value)    
  }

}
