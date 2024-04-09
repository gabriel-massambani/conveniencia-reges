import { Component } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutosService } from '../produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrl: './produto-list.component.css'
})
export class ProdutoListComponent {

  produtos: Array <Produto> = [];

  constructor(private service: ProdutosService, private route: Router){
    this.obterTodos();
  }

  obterTodos(){
    this.produtos = this.service.obterTodos();
  }

  add(){
    this.route.navigate(['produto']); 
  }

  deletarProduto(produto: Produto): void {
    if (confirm('Tem certeza que deseja deletar este produto?')) {
      if (produto.id !== undefined) {
        this.service.deletar(produto.id);
        // Após a remoção, você pode querer atualizar a lista de produtos
        this.obterTodos();
      } else {
        console.error('ID do produto é undefined.');
      }
    }
  }

  editarProduto(id: number | undefined): void {
    if (id !== undefined) {
      this.route.navigate(['/produto/editar', id]);
    }
  }
  


  

}
