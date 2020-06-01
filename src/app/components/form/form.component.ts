import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


paises: any[] = [];


  constructor(private countrieservice: CountriesService) { }

  ngOnInit(): void {

    this.countrieservice.getPaises()
    .subscribe( paises =>{
      this.paises = paises;

      console.log(this.paises);

    });


  }

  guardar(forma: NgForm) {

    console.log(forma.value);

  }

}
