import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  anzeigen: any;
  
  constructor(public api: RestApiService, public loadingController: LoadingController) { 

  }

  ngOnInit() {
    this.getAnzeigen();
  }

  async getAnzeigen() {
    const loading = await this.loadingController.create({
    });
    await loading.present();
    await this.api.getAnzeigen()
      .subscribe(res => {
        console.log(res);
        this.anzeigen = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
