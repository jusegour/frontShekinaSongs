import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { CancionServiceService } from '../services/cancion-service.service';
import { ModalController } from '@ionic/angular';
import { LetraModalComponent } from '../components/letra-modal/letra-modal.component';
import { OverlayBaseController } from '@ionic/angular/util/overlay';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  public folder: string;
  public canciones:any;
  public loading:boolean;

  constructor(private activatedRoute: ActivatedRoute,private router:Router,public modalController: ModalController,public cancionService: CancionServiceService,public alertController:AlertController) {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    
   }

  ngOnInit() {
    if(this.folder==='todas'){
      this.loading=true;
      this.cancionService.getCanciones().subscribe(data=>{
        this.canciones=data.cacniones;
        this.loading=false;
      },
      error=>{
        this.alertaError(error.message);
        this.loading=false;
      });     
    }
  }

  goToSearch(folder:string){
    this.router.navigateByUrl(`search/${folder}`);
  }

  goToCreate(){
    this.router.navigateByUrl('/create');
  }

  async mostrarLetra(cancion:any) {
    const modal = await this.modalController.create({
      component: LetraModalComponent,
      componentProps: {
        'letra':cancion.letra,
        'nombre':cancion.nombre
      }
    });
    return await modal.present();
  }

  buscarCancion(txtBusqueda:string){
    this.cancionService.getCanciones().subscribe(data => {
      this.loading=true;  
      const datos=data.cacniones;

      datos.forEach(cancion => {
        if(this.folder==='artista'){
          cancion.artista=cancion.artista.toLowerCase();
        }else if(this.folder==='tipo'){
          cancion.tipo=cancion.tipo.toLowerCase();
        }else if(this.folder==='nombre'){
          cancion.nombre=cancion.nombre.toLowerCase();
        }        
      });
      
      txtBusqueda=txtBusqueda.toLowerCase();

      if(this.folder==='artista'){   
        this.canciones = datos.filter(cancion=>cancion.artista===txtBusqueda);       
      }else if(this.folder==='tipo'){
        this.canciones = datos.filter(cancion=>cancion.tipo===txtBusqueda);
      }else if(this.folder==='nombre'){
        this.canciones = datos.filter(cancion=>cancion.nombre===txtBusqueda);
      }  
      this.loading=false;
    },
    error=>{
      this.alertaError(error.message);
    });
  }

  async alertaError(mensaje) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: [
        {
          text:'OK',
        }
      ]
    });

    await alert.present();
  }

}
