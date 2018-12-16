import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{AppPredictionComponent} from './prediction.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ MaterialModule } from '../shared/layout/material.module';
import { ShortTermComponent } from './short-term/short-term.component';
import { LongTermComponent } from './long-term/long-term.component';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { MethodComponentLongComponent } from '../shared/component/method-component-long/method-component-long.component';
import { MethodComponentShortComponent } from '../shared/component/short-method/method-component-short.component';
import { RealValuesComponent } from './real-values/real-values.component';

@NgModule({
  imports: [
    CommonModule,  BrowserAnimationsModule,   MaterialModule, FormsModule,
  RouterModule

  ],
  declarations: [AppPredictionComponent, ShortTermComponent, LongTermComponent, MethodComponentLongComponent,
     MethodComponentShortComponent, RealValuesComponent]
})
export class PredictionModule { }
