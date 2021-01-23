import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';
import { IonicModule } from '@ionic/angular';
import { LetraModalComponent } from './letra-modal/letra-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent,SearchComponent,LetraModalComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    IonicModule
    
  ],
  exports:[CreateComponent,SearchComponent,LetraModalComponent]
  
})
export class ComponentsModule { }
