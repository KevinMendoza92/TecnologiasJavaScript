/**
 * Created by USRDEL on 7/6/17.
 */
export class UsuarioClass {
  nombre: String;

  constructor(nombre?: String,
              public id?:number,
              public createdAt?:Date,
              public updateAt?:Date) {
  }

}
