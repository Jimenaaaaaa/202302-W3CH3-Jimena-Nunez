import { Pet, PetType } from '../../models/Pet-model';
import { Component } from '../component/component';
import './pets.scss';

export class Pets extends Component {
  constructor(public selector: string, public pets: PetType[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    const items = this.pets
      .map(
        (item) => `
        <li class="card">
          <span>Name: ${item.name}</span>
          <span>Breed: ${item.name}</span>
          <span>Owner: ${item.owner}</span>
          <span>Adopted: ${item.isAdopted}</span>
          <button>🗑️</button>
        </li>`
      )
      .join('\n');
    return `
    <section class="pets"><ul class="petlist">${items}</ul></section>
    `;
  }
}

