import { Component, OnInit } from '@angular/core';

import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.page.html',
  styleUrls: ['./moeda.page.scss'],
})
export class MoedaPage implements OnInit {
  Valor : number = 1;
  configuracao : string = null;
  Tipo : string = "dr";
  Dados : any[] = [{Moeda : 'Dolar', Valor :  5.36},{Moeda : 'Euro', Valor : 6.06}];
 
  Resultado : string = 1 + " dólar(es) igual a  R$ " + (1 * this.Dados[0].Valor).toFixed(2) ;
  constructor( private alertCtrl : AlertController, private toastCtrl : ToastController, private actionSheetCtrl : ActionSheetController) { 
    let listJson = localStorage.getItem('moeda2');

    

    if(listJson != null){
    
      this.Dados = JSON.parse(listJson);
      
    }

   
  }
/*
  iniciar(){
     //if(this.Dados == null){

    this.Dados.push(this.valores);

    this.updateLocalStorage();

  }*/
  
 

  ngOnInit() {
   
  }

  converter(opcao : string, valor : number){
    if(opcao == 'dr'){
      let aux = 0;
      if(this.Dados[0].Moeda != 'Dolar'){
        aux++;
      }
      this.Resultado =  valor + " dólar(es) igual a  R$ " + (valor * this.Dados[aux].Valor).toFixed(2) ;
    }
    else if(opcao == 'rd'){
      let aux = 0;
      if(this.Dados[0].Moeda != 'Dolar'){
        aux++;
      }
      this.Resultado =  valor + " real(ais) igual a  " + (valor / this.Dados[aux].Valor).toFixed(2) + " dólar(es)";
    }
    else if(opcao == 'er'){
      let aux = 0;
      if(this.Dados[0].Moeda != 'Euro'){
        aux++;
      }
      this.Resultado =  valor + " euro(s) igual a  R$" + (valor * this.Dados[aux].Valor).toFixed(2);
    }
    else if(opcao == 're'){
      let aux = 0;
      if(this.Dados[0].Moeda != 'Euro'){
        aux++;
      }
      this.Resultado =  valor + " real(ais) igual a  " + (valor / this.Dados[aux].Valor).toFixed(2) + " euro(s)";
    }
  }

configurar(valor : string){
  if(valor == 'true'){
      this.configuracao = "verdade";
  }
  else{
    this.configuracao = null;
  }
}

  updateLocalStorage(){
    localStorage.setItem('moeda', JSON.stringify(this.Dados));
  }

 
  async alterar(dado : any){
    const alert = await this.alertCtrl.create({
      header: 'Quer mesmo editar?',
      inputs: [
        {
          name: 'editDado',
          type: 'number',
          placeholder:  JSON.stringify(dado.Moeda + " = " + dado.Valor)
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Editar',
          handler: (form) => {
            console.log(form.editDado);
  

            this.Dados = this.Dados.filter(dadoArray=> dado != dadoArray);

            this.updateLocalStorage();
            //debugger;
            this.edit(dado.Moeda, form.editDado);
          }
        }
      ]
    });
  
    await alert.present();
  }

  async edit( moeda : string ,editDado : any){
    //VALIDA SE FOI PREENCHIDO ALGO
    if (editDado.trim().length < 1){
      const toast = await this.toastCtrl.create({
        message : 'Digite a alteração.',
        duration: 2000,
        position : 'top'
      });
        toast.present();
        return;
    }
        let dado = {Moeda : moeda, Valor : editDado};

        this.Dados.push(dado);

        this.updateLocalStorage();
        this.configuracao = null;
  }
}
