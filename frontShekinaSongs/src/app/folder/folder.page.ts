import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CancionServiceService } from '../services/cancion-service.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  public folder: string;
  public canciones:any;

  constructor(private activatedRoute: ActivatedRoute,private router:Router,public alertController:AlertController,public cancionService: CancionServiceService) {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    
   }

  ngOnInit() {
    if(this.folder==='todas'){
      this.cancionService.getCanciones().subscribe(data=>{
        this.canciones=data.cacniones;
      });
      
      
    }
  }

  goToSearch(folder:string){
    this.router.navigateByUrl(`search/${folder}`);
  }

  goToCreate(){
    this.router.navigateByUrl('/create');
  }

}
