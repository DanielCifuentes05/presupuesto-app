import { Egreso } from './egreso.model';

export class EgresoServicio {
  egresos: Egreso[] = [
    new Egreso('Renta Dpto', 900),
    new Egreso('Recibo', 500),
  ];

  eliminar(egreso: Egreso) {
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }
}

