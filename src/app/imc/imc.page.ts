import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {

	Nome: string;
  Altura: number;
  Peso: number;
  Resultado: number;
  Mensagem: string;
  listImc:any=[];

  constructor() { 
	let listJson = localStorage.getItem('imc');

    if(listJson != null){
      this.listImc = JSON.parse(listJson);
    }
  }

  ngOnInit() {
  }

calcIMC() {
    if (this.Peso > 0 && this.Altura > 0) {
      let finalIMC = this.Peso / (this.Altura * this.Altura);
      this.Resultado = parseFloat(finalIMC.toFixed(2));
      this.IMCMensagem();
    }
  }
  private IMCMensagem() {
    if (this.Resultado <= 18.5) {
      this.Mensagem = "Peso Baixo"
    }
    if (this.Resultado > 18.5 && this.Resultado < 25) {
      this.Mensagem = "Peso Normal"
    }
    if (this.Resultado >= 25 && this.Resultado <= 30) {
      this.Mensagem = "Sobrepeso"
    }
    if (this.Resultado > 30) {
      this.Mensagem = "Obeso"
    }
  }
  gravaIMC()
  {
    let list = {nome : this.Nome,imc :this.Resultado, nota : this.Mensagem};
    this.listImc.push(list);
    //this.listImc.push("Nome: "+this.Nome+"IMC: "+this.Resultado);
    localStorage.setItem('imc', JSON.stringify(this.listImc));

    this.Resultado = null;
    this.Altura = null;
    this.Nome = null;
    this.Peso = null;
    this.Mensagem = null;
  }

  updateLocalStorage(){
    localStorage.setItem('imc', JSON.stringify(this.listImc));
  }
delete(list : any){
    this.listImc = this.listImc.filter(listArray=> list != listArray);

    this.updateLocalStorage();
  }
}
