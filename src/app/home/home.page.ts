import { Component } from '@angular/core';
import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks : any[] = [];
  constructor( private alertCtrl : AlertController, private toastCtrl : ToastController, private actionSheetCtrl : ActionSheetController) {
    let taskJson = localStorage.getItem('taskDB');

    if(taskJson != null){
      this.tasks = JSON.parse(taskJson);
    }
  }

 async adicionar(){
  const alert = await this.alertCtrl.create({
    header: 'O que deseja fazer?',
    inputs: [
      {
        name: 'newTask',
        type: 'text',
        placeholder: 'O que deseja fazer?'
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
        text: 'Adicionar',
        handler: (form) => {
          console.log(form.newTask);

          //debugger;
          this.add(form.newTask);
        }
      }
    ]
  });

  await alert.present();
}

  async add(newTask : string){
    //VALIDA SE FOI PREENCHIDO ALGO
    if (newTask.trim().length < 1){
      const toast = await this.toastCtrl.create({
        message : 'Nos informe o que deseja fazer!!!',
        duration: 2000,
        position : 'top'
      });
        toast.present();
        return;
    }
        let task = {name : newTask, done : false};

        this.tasks.push(task);

        this.updateLocalStorage();
  }

  updateLocalStorage(){
    localStorage.setItem('taskDB', JSON.stringify(this.tasks));
  }

  async openActions( task : any){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'O que deseja fazer?',
      buttons: [
        {
          text: task.done ? 'Desmarcar' : 'Marcar',
          icon: task.done ? 'ellipse-outline' : 'checkmark-circle',
          handler: () => {
            task.done = !task.done;
            this.updateLocalStorage();
          }
        }, {
          text: 'Cancelar',
          icon: 'close-circle',
          role: 'cancel',
          handler: () => {
            console.log('Cancel cliked');
          }
        }
      ]
    });
  
    await actionSheet.present();
  }

  delete(task : any){
    this.tasks = this.tasks.filter(taskArray=> task != taskArray);

    this.updateLocalStorage();
  }

  async alterar(task : any){
    const alert = await this.alertCtrl.create({
      header: 'Quer mesmo editar?',
      inputs: [
        {
          name: 'editTask',
          type: 'text',
          placeholder:  JSON.stringify(task.name)
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
            console.log(form.editTask);
  

            this.tasks = this.tasks.filter(taskArray=> task != taskArray);

            this.updateLocalStorage();
            //debugger;
            this.edit(form.editTask);
          }
        }
      ]
    });
  
    await alert.present();
  }

  async edit(editTask : string){
    //VALIDA SE FOI PREENCHIDO ALGO
    if (editTask.trim().length < 1){
      const toast = await this.toastCtrl.create({
        message : 'Digite a alteração.',
        duration: 2000,
        position : 'top'
      });
        toast.present();
        return;
    }
        let task = {name : editTask, done : false};

        this.tasks.push(task);

        this.updateLocalStorage();
  }

}
