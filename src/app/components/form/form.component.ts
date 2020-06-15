import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { UsuarioModel } from '../../models/usuario.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // instacia modelo


  usuario: UsuarioModel;


  paises: any[] = [];


  constructor(private countrieservice: CountriesService) { }

  ngOnInit(): void {


    this.usuario = new UsuarioModel;

    this.countrieservice.getPaises()
      .subscribe(paises => {
        this.paises = paises;

        console.log(this.paises);

      });


  }

  guardar(forma: NgForm) {

    console.log(forma.value);

    this.usuario.nombre = forma.value.nombre;

    console.log("modelo");
    console.log(this.usuario);

  }

}
