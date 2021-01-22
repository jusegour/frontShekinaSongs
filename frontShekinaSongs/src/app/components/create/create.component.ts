import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  constructor(private router:Router) { }

  public tipoCancion:string[]=["Alabanza","Adoracion","Viejita"];

  ngOnInit() {}

  goToBack(){
  this.router.navigateByUrl('/filtro/artista');
  }



}
