import { mockprodutos } from './../../mock_produtos';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produto_service';
import { produto_int } from '../../produto_interface';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private produtoservice: ProdutoService ) {}

  produtos?: produto_int;

  lista_produtos = mockprodutos;

  ngOnInit(): void {
  }

  getHeroes(): void {
    this.produtoservice.getProdutos()
        .subscribe(produtos => this.lista_produtos = produtos);
  }

  seleciona(lista_produtos: produto_int): void
  {
    this.produtos = lista_produtos;
  }

}
