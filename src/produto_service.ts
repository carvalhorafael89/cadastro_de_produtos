import { Injectable } from '@angular/core';
import { produto_int } from './produto_interface';
import { mockprodutos } from './mock_produtos';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  getProdutos(): Observable<produto_int[]> {
    const produto = of(mockprodutos);
    return produto;
  }


}
