import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produto_service';
import { produto_int } from '../../produto_interface';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  lista_produtos: produto_int[]= [];
  seleciona_produto?: produto_int;

  onselect(selprod: produto_int): void {
    this.seleciona_produto = selprod;
  }

  constructor(private produtoService: ProdutoService ) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
   this.produtoService.getprodutos().subscribe( produto => this.lista_produtos = produto);
  }
}