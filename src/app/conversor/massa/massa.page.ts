import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-massa',
  templateUrl: './massa.page.html',
  styleUrls: ['./massa.page.scss'],
})
export class MassaPage implements OnInit {
  Resultado : string = "1kg convertido para g é igual a 1000g";
  opcao1 : string = "kg";
  opcao2 : string = "g";
  Valor : number = 1;
  constructor() { }

  ngOnInit() {
  }

  converter(valor : number, opcao1 : string, opcao2 : string){
    if(opcao1 == "kg" && opcao2 == "hg" || opcao1 == "hg" && opcao2 == "dag" || opcao1 == "dag" && opcao2 == "g" || opcao1 == "g" && opcao2 == "dg" || opcao1 == "dg" && opcao2 == "cg" || opcao1 == "cg" && opcao2 == "mg"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 10) + opcao2;
    }
    else if(opcao1 == "kg" && opcao2 == "dag" || opcao1 == "hg" && opcao2 == "g" || opcao1 == "dag" && opcao2 == "dg" || opcao1 == "g" && opcao2 == "cg" || opcao1 == "dg" && opcao2 == "mg"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 100) + opcao2;
    }
    else if(opcao1 == "kg" && opcao2 == "g" || opcao1 == "hg" && opcao2 == "dg" || opcao1 == "dag" && opcao2 == "cg" || opcao1 == "g" && opcao2 == "mg"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 1000) + opcao2;
    }
    else if(opcao1 == "kg" && opcao2 == "dg" || opcao1 == "hg" && opcao2 == "cg" || opcao1 == "dag" && opcao2 == "mg" ){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 10000) + opcao2;
    }
    else if(opcao1 == "kg" && opcao2 == "cg" || opcao1 == "hg" && opcao2 == "mg"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 100000) + opcao2;
    }
    else if(opcao1 == "kg" && opcao2 == "mg" ){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor * 1000000) + opcao2;
    }
    else if(opcao2 == "kg" && opcao1 == "mg"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 1000000) + opcao2;
    }
    else if(opcao2 == "kg" && opcao1 == "cg" || opcao2 == "hg" && opcao1 == "mg"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 100000) + opcao2;
    }
    else if(opcao2 == "kg" && opcao1 == "dg" || opcao2 == "hg" && opcao1 == "cg" || opcao2 == "dag" && opcao1 == "mg" ){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 10000) + opcao2;
    }
    else if(opcao2 == "kg" && opcao1 == "g" || opcao2 == "hg" && opcao1 == "dg" || opcao2 == "dag" && opcao1 == "cg" || opcao2 == "g" && opcao1 == "mg"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 1000) + opcao2;
    }
    else if(opcao2 == "kg" && opcao1 == "dag" || opcao2 == "hg" && opcao1 == "g" || opcao2 == "dag" && opcao1 == "dg" || opcao2 == "g" && opcao1 == "cg" || opcao2 == "dg" && opcao1 == "mg"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 100) + opcao2;
    }
    else if(opcao2 == "kg" && opcao1 == "hg" || opcao2 == "hg" && opcao1 == "dag" || opcao2 == "dag" && opcao1 == "g" || opcao2 == "g" && opcao1 == "dg" || opcao2 == "dg" && opcao1 == "cg" || opcao2 == "cg" && opcao1 == "mg"){
      this.Resultado = valor + opcao1 + " convertido para " + opcao2 + " é igual a " + (valor / 10) + opcao2;}
   
  }
}
