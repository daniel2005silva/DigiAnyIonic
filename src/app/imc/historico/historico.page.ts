import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {
  listImc:any=[];
  constructor() { 
    let listJson = localStorage.getItem('imc');

    if(listJson != null){
      this.listImc = JSON.parse(listJson);
    }
  }

  ngOnInit() {
  }
  updateLocalStorage(){
    localStorage.setItem('imc', JSON.stringify(this.listImc));
  }
delete(list : any){
    this.listImc = this.listImc.filter(listArray=> list != listArray);

    this.updateLocalStorage();
  }
}
