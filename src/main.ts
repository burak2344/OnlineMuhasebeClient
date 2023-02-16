import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { AuthGuard } from './app/ui/components/auth/guards/auth.guard';
import { DatePipe } from '@angular/common';
import {provideHttpClient} from "@angular/common/http"
import { StoreModule } from '@ngrx/store';

bootstrapApplication(AppComponent,{
  providers:[
    DatePipe,
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      StoreModule.forRoot(),
      RouterModule.forRoot([
        {
          path:"",
          loadComponent: ()=> import("./app/ui/components/layouts/layouts.component").then(c=> c.LayoutsComponent),
          canActivateChild: [AuthGuard],
          children: [
            {
              path: "",
              loadComponent: ()=> import("./app/ui/components/blank/blank.component").then(c=> c.BlankComponent)
            },
            {
              path: "ucafs",
              loadComponent: ()=> import("./app/ui/components/ucafs/ucafs.component").then(c=> c.UcafsComponent)
            },
            ]
        },
        {
          path: "login",
          loadComponent: ()=> import("./app/ui/components/auth/login/login.component").then(c=> c.LoginComponent)
        }
      ])
    )
  ]
})
