import { Component } from '@angular/core';
import {Bano} from "../models/bano";
import {FirestoreService} from "../services/firestore.service";
import {Coordenada} from "../models/coordenada";
import GeoPoint = firebase.firestore.GeoPoint;
import * as firebase from 'firebase';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public bano: Bano;
  public coordenada: Coordenada;

  constructor(
      private firestoreService: FirestoreService
  ) {
    this.bano = new Bano("", null, 0, "");
    this.coordenada = new Coordenada(0, 0);
  }

  public insertarBano(): void {
    this.bano.cooredenadas = new GeoPoint(this.coordenada.latitud, this.coordenada.longitud);
    this.firestoreService.insertar("banos", this.bano).then(
        (response) => {
          console.log(response);
        }
    ).catch(
        (error) => {
          console.log(error);
        }
    );
  }

}
