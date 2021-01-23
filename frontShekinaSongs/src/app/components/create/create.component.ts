import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Cancion } from 'src/app/models/cancion.model';
import { CancionServiceService } from 'src/app/services/cancion-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  public formGroup:FormGroup;
  public cancion:Cancion;
  public resultado:any;

  constructor(private router:Router,private formBuilder:FormBuilder,private cancionService:CancionServiceService,public alertController:AlertController) { }

  public tipoCancion:string[]=["Alabanza","Adoracion","Viejita"];

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      nombre:[null,Validators.required],
      artista:[null,Validators.required],
      letra:[null,Validators.required],
      tipo:[null,Validators.required]
    })
  }

  get f(){
    return this.formGroup.controls;
  }

  goToBack(){
  this.router.navigateByUrl('/filtro/todas');
  }

  saveCancion(){
    const artista = this.f.artista.value;
    const nombre = this.f.nombre.value;
    const letra = this.f.letra.value;
    const tipo = this.f.tipo.value;

    this.cancion=new Cancion(artista,nombre,letra,tipo);  
    
    console.log(this.cancion);
    
    
    this.cancionService.saveCanciones(this.cancion).subscribe(newCancion=>{
      this.resultado=newCancion.cacion;
      if(this.resultado){
        this.alertaExito();
      }
    },
    error=>{
       this.alertaError(error.message);
    }) 
  }

  async alertaExito() {
    const alert = await this.alertController.create({
      header: 'Exito',
      message: 'Cancion Guardada',
      buttons: [
        {
          text:'OK',
          handler:()=>{
            this.router.navigateByUrl("/filtro/todas");
          }
        }
      ]
    });

    await alert.present();
  }

  async alertaError(mensaje) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: [
        {
          text:'OK'
        }
      ]
    });

    await alert.present();
  }
}
