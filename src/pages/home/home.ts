import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

export interface result {
  
  title:string; 
  overview:string ; 
  release_date:string;
  poster_path:string;
}

/*const fake: result[] = [
{title : 'iheb' , author : 'the best' , date : '14/09/1996' },
{title : 'mastoura' , author : 'the last' , date :  '14/09/2096' }
]
*/



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   result : result[] ;

  constructor(public navCtrl: NavController) {
   this.result= [];
  
  }


  fetchResults(ev: any){

  }








  gotodetails(film : result){
    this.navCtrl.push(DetailsPage ,film);
  }
  getItems(ev: any): void {
    let val = ev.target.value;
    if (val) {
      this.result = fake;
    }
    else {
      this.result= [];
    }
  }
}
