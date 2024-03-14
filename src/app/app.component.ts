import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RickAndMortyService } from './services/rick-and-morty.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  location: any;

  numberRandom: number = 0;
  url: string = '';
  inputS: number = 1;
  profileForm!: FormGroup;

  loader: boolean = true;  
  
  constructor(
    private rickandmortyService: RickAndMortyService, private formBuilder: FormBuilder
  ) {
    this.numberRandom = this.rickandmortyService.getNumberRandom(126);
    this.inputS = this.numberRandom;
    this.buildForm();
    
  }

  ngOnInit(): void {
    this.getLocation();
    this.isLoader();
  }

  private buildForm() {
    this.profileForm = this.formBuilder.group({
      inputSearch: ['', [Validators.required]]
    });
    this.profileForm.valid;
    this.profileForm.invalid;
  }

  isLoader() {
    setTimeout(() => {
      this.loader = false;
    }, 2000)
  }

  onSubmit(e: Event) {
    e.preventDefault();
    if (this.profileForm.valid) {
      this.inputS = this.profileForm.value.inputSearch;
      this.getLocation();
    }
  }


  getLocation() {
    this.url = `https://rickandmortyapi.com/api/location/${this.inputS || 'hola'}`;
    this.rickandmortyService.getApi(this.url)
      .subscribe(
        res => {
          this.location = res;
        },
        err => console.log(err)
      )
  }
}
