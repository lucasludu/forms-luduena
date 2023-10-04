import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-usuario',
  templateUrl: './data-usuario.component.html',
  styleUrls: ['./data-usuario.component.scss']
})
export class DataUsuarioComponent {

  @Input() 
  datos: any;

}
