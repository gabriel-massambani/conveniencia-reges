import { Injectable } from '@angular/core';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: Array<Produto> = [];

  private ultimoId: number = 0;

  public inserir(produto:Produto){
    produto.id = this.obterNovoId();
    this.produtos.push(produto);
  }

  private obterNovoId(): number {
    return ++this.ultimoId;
  }

  public alterar(id: number, produto: Produto): void {
    const index = this.produtos.findIndex(p => p.id === id);
    if (index !== -1) {
      this.produtos[index] = produto;
    } else {
      console.error('Produto não encontrado para o ID fornecido.');
    }
  }

  public deletar(id:number){
    var index = this.produtos.findIndex(t =>t.id == id);
    this.produtos.splice(index,1);
  }

  public obterPorId(id:number) : Produto{
    var obj = this.produtos.findIndex(t =>t.id == id);
    return this.produtos[obj];
  }

  public obterTodos() : Array<Produto>{
    return  this.produtos;
  }

  constructor() { }
}
