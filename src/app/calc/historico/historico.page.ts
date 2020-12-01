import { Component, OnInit } from '@angular/core';

import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {
  contas : any[] = [];
  constructor(private alertCtrl : AlertController, private toastCtrl : ToastController, private actionSheetCtrl : ActionSheetController) {
  	let contaJson = localStorage.getItem('contaDB');

    if(contaJson != null){
      this.contas = JSON.parse(contaJson);
    }
  }

  ngOnInit() {
  }
  updateLocalStorage(){
    localStorage.setItem('contaDB', JSON.stringify(this.contas));
  }
delete(cont : any){
    this.contas = this.contas.filter(taskArray=> cont != taskArray);

    this.updateLocalStorage();
  }
}
