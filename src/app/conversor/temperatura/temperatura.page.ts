import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.page.html',
  styleUrls: ['./temperatura.page.scss'],
})
export class TemperaturaPage implements OnInit {
  opcao :  string = "cf";
  Valor : number = 1;
  Resultado : string = "0ºC é igual a 32ºF";
  constructor() { }

  ngOnInit() {
  }

  converter(opcao : string, valor : number){
    if(opcao == "cf"){
      this.Resultado = valor + "ºC convertido para ºF é igual a " + (((valor / 5) * 9) + 32).toFixed(4) + "ºF";
    }
    else if(opcao == "fc"){
      this.Resultado = valor + "ºF convertido para ºC é igual a " + (((valor - 32) / 9) * 5).toFixed(4) + "ºC";
    }

  }
}
