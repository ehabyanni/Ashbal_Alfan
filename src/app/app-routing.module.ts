import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisingProductsComponent } from './advertising-products/advertising-products.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BrochureComponent } from './brochure/brochure.component';
import { CartRequestComponent } from './cart-request/cart-request.component';
import { CartComponent } from './cart/cart.component';
import { ErrorPageNotFoundComponent } from './error-page-not-found/error-page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PaperPrintingsComponent } from './paper-printings/paper-printings.component';
import { PricingRequestComponent } from './pricing-request/pricing-request.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StickersComponent } from './stickers/stickers.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path:''                    , component:HomePageComponent           },
  {path:'cart'                , component:CartComponent               },
  {path:'cart_request'        , component:CartRequestComponent        },
  {path:'blog'                , component:BlogViewComponent           },
  {path:'blog/:id'            , component:BlogDetailsComponent        },
  {path:'home'                , component:HomePageComponent           },
  {path:'pricing_request'     , component:PricingRequestComponent     },
  {path:'paper_printings'     , component:PaperPrintingsComponent     },
  {path:'stickers'            , component:StickersComponent           },
  {path:'advertising'         , component:AdvertisingProductsComponent},
  {path:'brochure'            , component:BrochureComponent           },
  {path:'products/:id'        , component:ProductDetailsComponent     },
  {path:'page-not-found'      , component:ErrorPageNotFoundComponent  },
  {path:'user-login'          , component:UserLoginComponent          },
  {path:'user-register'       , component:UserRegisterComponent       },
  {path:'**'                  , component:ErrorPageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
