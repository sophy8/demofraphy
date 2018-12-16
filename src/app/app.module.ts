import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PredictionModule } from './prediction/prediction.module';
import { AppComponent } from './app.component';
import {
  RouterModule
} from '@angular/router';
import { ROUTES } from './app.routes';
import { DialogOverviewExampleComponent } from './shared/component/dialog-overview-example/dialog-overview-example.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleComponent
  ],
  imports: [
    BrowserModule,
    PredictionModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true
    })
  ],
  providers: [],
  entryComponents: [DialogOverviewExampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
