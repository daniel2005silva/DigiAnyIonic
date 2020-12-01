import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.page.html',
  styleUrls: ['./calc.page.scss'],
})
export class CalcPage implements OnInit {
	contas : any[] = [];
	campo: string = "";
	campo2: string = null;
	numero1: number = null;
	numero2: number = null; 
	sinal: string = null;
	conta: number;

  constructor(private alertCtrl : AlertController, private toastCtrl : ToastController, private actionSheetCtrl : ActionSheetController) {
  	let contaJson = localStorage.getItem('contaDB');

    if(contaJson != null){
      this.contas = JSON.parse(contaJson);
    }
  }

  ngOnInit() {
  }

  calcular(valor: string){
  	if(valor == 'c'){
  			this.campo2 = null;
  			this.numero1 = null;
  			this.numero2 = null;
  			this.campo = "";
  			this.conta = null;
  			this.sinal = null;
  	}else if(valor == '/' || valor == '*' || valor == '-' || valor == '+' || valor == '='){
  		if(this.sinal == null){
  			this.sinal = valor;
  			if(this.numero1 == null){
  				this.numero1 = parseFloat(this.campo);
  			}else if(this.numero2 == null){
  				this.numero2 = parseFloat(this.campo);
  			}
  			this.campo = "";
  		
  			this.campo2 = this.numero1 + this.sinal + this.campo;
  		}else{
  			if(this.numero2 == null){
  				this.numero2 = parseFloat(this.campo);
  				
  			}
  			if(this.sinal == '/'){
  				this.conta = this.numero1 / this.numero2; 
  			}else if(this.sinal == '*'){
  				this.conta = this.numero1 * this.numero2; 
  			}else if(this.sinal == '-'){
  				this.conta = this.numero1 - this.numero2; 
  			}else if(this.sinal == '+'){
  				this.conta = this.numero1 + this.numero2; 
  			}

  			let calc =  this.numero1 + " " + this.sinal + " " + this.numero2 + " = " + this.conta;

        	this.contas.push(calc);

        	this.updateLocalStorage();


  			this.campo2 = null;
  			this.numero1 = null;
  			this.numero2 = null;
  			this.campo = this.conta.toString();
  			this.conta = null;
  			this.sinal = null;



  		}
  	}else{
  		this.campo = this.campo + valor;
  		if(this.campo2 != null){
  			this.campo2 = this.numero1 + this.sinal + this.campo;
  		}
  	}
  }

updateLocalStorage(){
    localStorage.setItem('contaDB', JSON.stringify(this.contas));
  }
delete(cont : any){
    this.contas = this.contas.filter(taskArray=> cont != taskArray);

    this.updateLocalStorage();
  }
}
