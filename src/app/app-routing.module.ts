import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PaperPrintingsComponent } from './paper-printings/paper-printings.component';
import { PricingRequestComponent } from './pricing-request/pricing-request.component';

const routes: Routes = [
  {path:''                    , component:HomePageComponent           },
  {path:'blog'                , component:BlogViewComponent           },
  {path:'blog/:id'            , component:BlogDetailsComponent        },
  {path:'home'                , component:HomePageComponent           },
  {path:'pricing_request'     , component:PricingRequestComponent     },
  {path:'paper_printings'     , component:PaperPrintingsComponent     },
  {path:'**'                  , component:HomePageComponent           }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
