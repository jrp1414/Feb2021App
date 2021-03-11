import { NgModule } from '@angular/core';
import {RatingModule} from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';

@NgModule({
  exports:[
    RatingModule,
    ToastModule,
    RippleModule 
  ]
})
export class PrimengModule { }
