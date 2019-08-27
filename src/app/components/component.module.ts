import { NgModule } from '@angular/core';

//add these extra
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';
import { ImageCropperModule } from 'ngx-image-cropper';
import { TranslateModule } from '@ngx-translate/core';

//angular material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

//components
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PlanCardComponent } from './plan-card/plan-card.component';
import { CityAgendaCardComponent } from './city-agenda-card/city-agenda-card.component';
import { OfferDiscountCardComponent } from './offer-discount-card/offer-discount-card.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    NgScrollbarModule,
    IonBottomDrawerModule,
    ImageCropperModule,
    TranslateModule
  ],
  declarations: [
    ToolbarComponent,
    PlanCardComponent,
    CityAgendaCardComponent,
    OfferDiscountCardComponent,
  ],
  exports: [
    ToolbarComponent,
    IonBottomDrawerModule,
    PlanCardComponent,
    CityAgendaCardComponent,
    OfferDiscountCardComponent,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    ImageCropperModule,
    TranslateModule
  ]
})
export class ComponentModule { }
