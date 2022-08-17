import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PricingRequestComponent } from './pricing-request/pricing-request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaperPrintingsComponent } from './paper-printings/paper-printings.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { StickersComponent } from './stickers/stickers.component';
import { AdvertisingProductsComponent } from './advertising-products/advertising-products.component';
import { BrochureComponent } from './brochure/brochure.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ErrorPageNotFoundComponent } from './error-page-not-found/error-page-not-found.component';
import { CategoryProductCarosuelComponent } from './category-product-carosuel/category-product-carosuel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FirstSliderComponent } from './first-slider/first-slider.component';
import { CartComponent } from './cart/cart.component';
import { CartRequestComponent } from './cart-request/cart-request.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogViewComponent,
    HomePageComponent,
    PricingRequestComponent,
    PaperPrintingsComponent,
    BlogDetailsComponent,
    StickersComponent,
    AdvertisingProductsComponent,
    BrochureComponent,
    ProductDetailsComponent,
    ErrorPageNotFoundComponent,
    CategoryProductCarosuelComponent,
    ContactUsComponent,
    FirstSliderComponent,
    CartComponent,
    CartRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
