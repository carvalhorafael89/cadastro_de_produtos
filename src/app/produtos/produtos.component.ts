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

  produtos?: produto_int[]

  ngOnInit(): void {
  }

  getProdutos(): void {
    this.produtos = this.produtoservice.getProdutos();
  }

}
