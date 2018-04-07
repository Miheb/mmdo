import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { result } from '../home/home';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
   title : result ;
   author : result ; 
   date : result ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.title = this.navParams.data.title ;
     this.date = this.navParams.data.date ;
     this.author = this.navParams.data.author ;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
