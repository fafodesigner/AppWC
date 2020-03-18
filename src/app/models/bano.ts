import GeoPoint = firebase.firestore.GeoPoint;
import * as firebase from 'firebase';

export class Bano {
    constructor(
        public _id: string,
        public cooredenadas: GeoPoint,
        public costo: number,
        public nombre: string
    ){}
}
