import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { BlogComponent } from './text/blog/blog.component';

const routes: Routes = [
    //dinamik bir ifade vermek istediğimizde : iki nokta üst üste işareti koyulur.
    { path: 'products', component: ProductComponent },
    { path: 'product-add-1', component: ProductAddForms1Component, canActivate: [LoginGuard] },
    { path: 'product-add-2', component: ProductAddForms2Component, canActivate: [LoginGuard] },
    { path: '', redirectTo: 'products', pathMatch: 'full' },//herhangi bir şey yazılmamışsa durumu.
    { path: 'products/category/:categoryId', component: ProductComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cart', component: CartComponent },
    { path: 'blog', component: BlogComponent }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule { }