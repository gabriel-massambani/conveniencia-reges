import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';

const routes: Routes = [
  {path: "produto", component: ProdutoFormComponent},
  {path: "produtos", component: ProdutoListComponent},
  {path: "produto/editar/:id", component: ProdutoFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
