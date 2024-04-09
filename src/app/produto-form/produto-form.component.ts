import { Component } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.css'
})
export class ProdutoFormComponent {

  produto: Produto = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProdutosService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; 
      if (id) {
        this.carregarProduto(id);
      }
    });
  }

  carregarProduto(id: number): void {
    const produto = this.service.obterPorId(id);
    if (produto) {
      this.produto = produto;
    } else {
      console.error('Produto não encontrado para o ID fornecido.');
    }
  }

  salvarEdicao(): void {
    if (this.produto.id) {
      this.service.alterar(this.produto.id, this.produto);
    } else {
      console.error('ID do produto inválido.');
    }
    this.router.navigate(['/produtos']);
  }

  submit(): void {
    if (this.produto.id) {
      this.service.alterar(this.produto.id, this.produto);
    } else {
      this.service.inserir(this.produto);
    }
    this.router.navigate(['produtos']);
  }


}
