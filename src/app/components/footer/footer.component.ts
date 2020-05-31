import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  paises:any[] = [];

  constructor( private http: HttpClient ) {

  this.http.get("https://restcountries.eu/rest/v2/all").subscribe( (response:any)  => {

    this.paises = response;

  });

  }

  ngOnInit(): void {

    console.log("creando footer");

  }

}
