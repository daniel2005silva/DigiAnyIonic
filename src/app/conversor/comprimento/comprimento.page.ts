import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comprimento',
  templateUrl: './comprimento.page.html',
  styleUrls: ['./comprimento.page.scss'],
})
export class ComprimentoPage implements OnInit {
Resultado : string = "1m convertido para cm é igual a 100cm";
opcao1 : string = "m";
opcao2 : string = "cm";
Valor : number = 1;
  constructor() { }

  ngOnInit() {
  }

converter(valor : number, opcao1 : string, opcao2 : string){
  if(opcao1 == "km" && opcao2 == "hm" || opcao1 == "hm" && opcao2 == "dam" || opcao1 == "dam" && opcao2 == "m" || opcao1 == "m" && opcao2 == "dm" || opcao1 == "dm" && opcao2 == "cm" || opcao1 == "cm" && opcao2 == "mm"){
    this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 10) + opcao2;
  }
  else if(opcao1 == "km" && opcao2 == "dam" || opcao1 == "hm" && opcao2 == "m" || opcao1 == "dam" && opcao2 == "dm" || opcao1 == "m" && opcao2 == "cm" || opcao1 == "dm" && opcao2 == "mm"){
    this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 100) + opcao2;
  }
  else if(opcao1 == "km" && opcao2 == "m" || opcao1 == "hm" && opcao2 == "dm" || opcao1 == "dam" && opcao2 == "cm" || opcao1 == "m" && opcao2 == "mm"){
    this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 1000) + opcao2;
  }
  else if(opcao1 == "km" && opcao2 == "dm" || opcao1 == "hm" && opcao2 == "cm" || opcao1 == "dam" && opcao2 == "mm" ){
    this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 10000) + opcao2;
  }
  else if(opcao1 == "km" && opcao2 == "cm" || opcao1 == "hm" && opcao2 == "mm"){
    this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 100000) + opcao2;
  }
  else if(opcao1 == "km" && opcao2 == "mm" ){
    this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 1000000) + opcao2;
  }
  else if(opcao2 == "km" && opcao1 == "mm"){
    this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 1000000) + opcao2;
  }
  else if(opcao2 == "km" && opcao1 == "cm" || opcao2 == "hm" && opcao1 == "mm"){
    this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 100000) + opcao2;
  }
  else if(opcao2 == "km" && opcao1 == "dm" || opcao2 == "hm" && opcao1 == "cm" || opcao2 == "dam" && opcao1 == "mm" ){
    this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 10000) + opcao2;
  }
  else if(opcao2 == "km" && opcao1 == "m" || opcao2 == "hm" && opcao1 == "dm" || opcao2 == "dam" && opcao1 == "cm" || opcao2 == "m" && opcao1 == "mm"){
    this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 1000) + opcao2;
  }
  else if(opcao2 == "km" && opcao1 == "dam" || opcao2 == "hm" && opcao1 == "m" || opcao2 == "dam" && opcao1 == "dm" || opcao2 == "m" && opcao1 == "cm" || opcao2 == "dm" && opcao1 == "mm"){
    this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 100) + opcao2;
  }
  else if(opcao2 == "km" && opcao1 == "hm" || opcao2 == "hm" && opcao1 == "dam" || opcao2 == "dam" && opcao1 == "m" || opcao2 == "m" && opcao1 == "dm" || opcao2 == "dm" && opcao1 == "cm" || opcao2 == "cm" && opcao1 == "mm"){
    this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 10) + opcao2;
  }
 
}
}
