import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actor } from '../interface/actor';
import { PersonajesService } from '../service/personajes.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.page.html',
  styleUrls: ['./paso2.page.scss'],
})
export class Paso2Page implements OnInit, OnDestroy {

  user: Actor = {};
  list: Actor[]= [];
  personajes: Actor[]= [];
  subcriptionObj: Subscription = new Subscription;
  subcriptionList: Subscription = new Subscription;

  constructor(
    private personajeService: PersonajesService
  ) { }

  ngOnDestroy(): void {
    if(this.subcriptionList!=undefined || this.subcriptionList != null){
      this.subcriptionList.unsubscribe();
    }

    if(this.subcriptionObj!=undefined || this.subcriptionObj != null){
      this.subcriptionObj.unsubscribe();
    }
  }

  ngOnInit() {
    
    this.subcriptionObj =
    this.personajeService.$getObjectSource.subscribe(data=>{
      console.log(data);
      this.user = data;
    });

    this.subcriptionList =
    this.personajeService.$getListSource.subscribe(data=>{
      console.log(data);
      this.list = data;
    });

    this.personajeService.getPersonajes().subscribe((response: any)=>{
      this.personajes = response.results;

    });

  }

}
