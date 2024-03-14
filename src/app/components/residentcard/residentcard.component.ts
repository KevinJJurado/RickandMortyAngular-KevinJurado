import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-residentcard',
  templateUrl: './residentcard.component.html',
  styleUrls: ['./residentcard.component.css']
})
export class ResidentcardComponent implements OnInit, OnChanges{

  @Input() location: any;
  residents: Array<any> = [];
  public page: number = 1
  

  constructor(private rickandmortyService: RickAndMortyService) {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.getResidents();
  }

  getResidents() {
    this.residents = [];
    this.location?.residents.forEach((resid: any) => {
      this.rickandmortyService.getApi(resid)
      .subscribe(
        res => {
          this.residents.push(res)
          this.page = 1;
        },
        err => console.log(err)
      )
    })
  }

}
