import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PricingRequestComponent } from './pricing-request/pricing-request.component';

const routes: Routes = [
  {path:''                    , component:HomePageComponent           },
  {path:'blog'                , component:BlogViewComponent           },
  {path:'home'                , component:HomePageComponent           },
  {path:'pricing_request'     , component:PricingRequestComponent     },
  {path:'**'                  , component:HomePageComponent           }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
