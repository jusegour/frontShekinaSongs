import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Filtrar: Artista',
      url: '/filtro/artista',
      icon: 'person-circle-outline'
    },
    {
      title: 'Filtrar: Tipo',
      url: '/filtro/tipo',
      icon: 'list-circle-outline'
    },
    {
      title: 'Filtrar: Nombre',
      url: '/filtro/nombre',
      icon: 'musical-note-outline'
    },
    {
      title: 'Filtrar: Todas',
      url: '/filtro/todas',
      icon: 'list-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
