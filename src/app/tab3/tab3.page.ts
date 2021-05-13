import { TryCatchStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public actionSheetCtrl: ActionSheetController) {}
  async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Codeswag Actionsheet',
      buttons:[
        {
          text: '刪除好友',
          role: 'destructive',
          icon: 'trash',
          handler:() =>{
            console.log('the delete button has been clicked!');
          }
        },{
          text: '個人資訊',
          icon: 'people-circle-outline',
          handler:() => {
            console.log('The play button has been clicked');
          }
        },{
          text: '分享',
          icon: 'share',
          handler:() => {
            console.log('The share button has been clicked');
        }
         }, {
          text: '取消',
          icon: 'close',
          role: 'cancel',
          handler:() => {
            console.log('The close button has been clicked');
        }}
      ],
      cssClass: 'custom=css',
      animated: true,
      backdropDismiss: true,
      keyboardClose: false,
      mode: 'md'
    });
    actionSheet.present();

    actionSheet.onWillDismiss().then(() => {
      console.log('the action hseet is about to close');
    });

    actionSheet.onDidDismiss().then(() => {
      console.log('the action hseet is already closed');
    });

  }
}
