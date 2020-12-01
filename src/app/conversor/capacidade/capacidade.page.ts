import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capacidade',
  templateUrl: './capacidade.page.html',
  styleUrls: ['./capacidade.page.scss'],
})
export class CapacidadePage implements OnInit {
  Resultado : string = "1l convertido para ml é igual a 1000ml";
  opcao1 : string = "l";
  opcao2 : string = "ml";
  Valor : number = 1;
  constructor() { }

  ngOnInit() {
  }

  converter(valor : number, opcao1 : string, opcao2 : string){
    if(opcao1 == "kl" && opcao2 == "hl" || opcao1 == "hl" && opcao2 == "dal" || opcao1 == "dal" && opcao2 == "l" || opcao1 == "l" && opcao2 == "dl" || opcao1 == "dl" && opcao2 == "cl" || opcao1 == "cl" && opcao2 == "ml"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 10) + opcao2;
    }
    else if(opcao1 == "kl" && opcao2 == "dal" || opcao1 == "hl" && opcao2 == "l" || opcao1 == "dal" && opcao2 == "dl" || opcao1 == "l" && opcao2 == "cl" || opcao1 == "dl" && opcao2 == "ml"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 100) + opcao2;
    }
    else if(opcao1 == "kl" && opcao2 == "l" || opcao1 == "hl" && opcao2 == "dl" || opcao1 == "dal" && opcao2 == "cl" || opcao1 == "l" && opcao2 == "ml"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 1000) + opcao2;
    }
    else if(opcao1 == "kl" && opcao2 == "dl" || opcao1 == "hl" && opcao2 == "cl" || opcao1 == "dal" && opcao2 == "ml" ){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 10000) + opcao2;
    }
    else if(opcao1 == "kl" && opcao2 == "cl" || opcao1 == "hl" && opcao2 == "ml"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 100000) + opcao2;
    }
    else if(opcao1 == "kl" && opcao2 == "ml" ){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 1000000) + opcao2;
    }
    else if(opcao2 == "kl" && opcao1 == "ml"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 1000000) + opcao2;
    }
    else if(opcao2 == "kl" && opcao1 == "cl" || opcao2 == "hl" && opcao1 == "ml"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 100000) + opcao2;
    }
    else if(opcao2 == "kl" && opcao1 == "dl" || opcao2 == "hl" && opcao1 == "cl" || opcao2 == "dal" && opcao1 == "ml" ){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 10000) + opcao2;
    }
    else if(opcao2 == "kl" && opcao1 == "l" || opcao2 == "hl" && opcao1 == "dl" || opcao2 == "dal" && opcao1 == "cl" || opcao2 == "l" && opcao1 == "ml"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 1000) + opcao2;
    }
    else if(opcao2 == "kl" && opcao1 == "dal" || opcao2 == "hl" && opcao1 == "l" || opcao2 == "dal" && opcao1 == "dl" || opcao2 == "l" && opcao1 == "cl" || opcao2 == "dl" && opcao1 == "ml"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 100) + opcao2;
    }
    else if(opcao2 == "kl" && opcao1 == "hl" || opcao2 == "hl" && opcao1 == "dal" || opcao2 == "dal" && opcao1 == "l" || opcao2 == "l" && opcao1 == "dl" || opcao2 == "dl" && opcao1 == "cl" || opcao2 == "cl" && opcao1 == "ml"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 10) + opcao2;}
   
  }
}
