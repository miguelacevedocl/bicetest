import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { NgtUniversalModule } from '@ng-toolkit/universal';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },





];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    CommonModule,
    NgtUniversalModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(routes, { enableTracing: false, initialNavigation: 'enabled' }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
