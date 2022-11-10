import { Component, Input} from '@angular/core';
import { produto_int } from '../../produto_interface';


@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})

export class ProdutoDetalheComponent{
 @Input() selprod?: produto_int;

}
