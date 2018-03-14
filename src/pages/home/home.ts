import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export interface result {
     
  title:string ; 
  author:string; 
  date:string;

}

const fake: result[] = [
{title : 'iheb' , author : 'the best' , date: '14/09/1996' },
{title : 'mastoura' , author : 'the last' , date: '14/09/2096' }
]

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   result : result[] ;

  constructor(public navCtrl: NavController) {
   this.result=fake ;
  }

}
