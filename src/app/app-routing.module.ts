import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, 
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }, 
  { path: 'site-framework', loadChildren: () => import('./side-framework/side-framework.module').then(m => m.SideFrameworkModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
