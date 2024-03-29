import { NgModule } from '@angular/core';
import {RatingModule} from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
import {ChipsModule} from 'primeng/chips';
import {CarouselModule} from 'primeng/carousel';
import {ProgressBarModule} from 'primeng/progressbar';

@NgModule({
  exports:[
    RatingModule,
    ToastModule,
    RippleModule,
    ChipsModule,
    CarouselModule,
    ProgressBarModule
  ]
})
export class PrimengModule { }
