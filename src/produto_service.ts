import { Injectable } from '@angular/core';
import { produto_int } from './produto_interface';
import { mockprodutos } from './mock_produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  getProdutos(): produto_int[] {
    return mockprodutos;
  }

}
