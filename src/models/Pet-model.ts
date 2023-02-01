/* eslint-disable no-unused-vars */
export type PetType = {
  id: string;
  name: string;
  breed: string;
  owner: string;
  isAdopted: boolean;
}


export class Pet implements PetType{
  static generateId() {
    const aNumbers = new Uint32Array(1);
    crypto.getRandomValues(aNumbers);
    return ('000000' + aNumbers[0]).slice(-6);
  }

  public id!: string;
  public isAdopted: boolean;

  constructor(public name: string, public breed: string, public owner: string) {
    this.isAdopted = false;
    this.id = Pet.generateId();
  }

  adopt() {
    this.isAdopted = true;
  }
}
