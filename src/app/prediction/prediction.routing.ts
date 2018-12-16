import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortTermComponent } from '../prediction/short-term/short-term.component';
import { LongTermComponent } from '../prediction/long-term/long-term.component';
import { AppPredictionComponent } from './prediction.component';
import { RealValuesComponent } from './real-values/real-values.component';

export const predictionRoutes: Routes = [
  {path: '',
  component: AppPredictionComponent},
    {
      path: 'short-term',
      component: ShortTermComponent
    },
    {
      path: 'long-term',
      component: LongTermComponent 
    },
    {
      path:'real-value',
      component: RealValuesComponent
    }
];

export const appRoutingProviders: any[] = [];
export const predictionRouting: ModuleWithProviders = RouterModule.forChild(predictionRoutes);
