import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [CreateComponent,SearchComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[CreateComponent,SearchComponent]
  
})
export class ComponentsModule { }
