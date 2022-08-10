import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisingProductsComponent } from './advertising-products/advertising-products.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BrochureComponent } from './brochure/brochure.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PaperPrintingsComponent } from './paper-printings/paper-printings.component';
import { PricingRequestComponent } from './pricing-request/pricing-request.component';
import { StickersComponent } from './stickers/stickers.component';

const routes: Routes = [
  {path:''                    , component:HomePageComponent           },
  {path:'blog'                , component:BlogViewComponent           },
  {path:'blog/:id'            , component:BlogDetailsComponent        },
  {path:'home'                , component:HomePageComponent           },
  {path:'pricing_request'     , component:PricingRequestComponent     },
  {path:'paper_printings'     , component:PaperPrintingsComponent     },
  {path:'stickers'            , component:StickersComponent           },
  {path:'advertising'         , component:AdvertisingProductsComponent},
  {path:'brochure'            , component:BrochureComponent           },
  {path:'**'                  , component:HomePageComponent           }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
