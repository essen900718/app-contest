import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
@Component({
  selector: 'app-microlesson',
  templateUrl: './microlesson.page.html',
  styleUrls: ['./microlesson.page.scss'],
})
export class MicrolessonPage implements OnInit {

  constructor(public actionSheetCtrl: ActionSheetController) {}
  ngOnInit(){}

  async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      buttons:[

          {
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



