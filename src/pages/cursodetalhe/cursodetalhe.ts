import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';

@Component({
  selector: 'page-cursodetalhe',
  templateUrl: 'cursodetalhe.html'
})
export class CursoDetalhePage {
  
  public id_user;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) { 
    // If we navigated to this page, we will have an item available as a nav param
    this.id_user = navParams.get("idUser");

    this.user = [];
    this.getUser(this.id_user);
    
  }

  ionViewWillEnter() {
    
  }

  getUser(id_user: number) {
    this.userProvider.get(id_user)
      .then((result: any) => {
          this.user = result.data;
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os usuários. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

}
