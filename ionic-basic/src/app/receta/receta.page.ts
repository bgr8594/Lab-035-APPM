import { Component, OnInit } from '@angular/core';
import { Receta } from '../interface/receta';
import { RecetaService } from '../service/receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html'
})
export class RecetaPage implements OnInit {
  private recetaService: RecetaService;

  recetas: Receta[] = [] ;
  constructor(private servicioReceta: RecetaService) {
    this.recetaService = servicioReceta;
   }

  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
  }

}
