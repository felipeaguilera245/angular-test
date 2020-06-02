import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute) {

    this.router.params.subscribe(parametros => {


      console.log(parametros.name);

    }



    )




  }

  ngOnInit(): void {

  }

}
