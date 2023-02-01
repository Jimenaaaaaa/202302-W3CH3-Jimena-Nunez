import { Pet, PetType } from '../../models/pets';
import { Component } from '../component/component';

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
          <span>${item.isCompleted}</span>
          <span title="${item.id}">${item.name}</span>
          <span>${item.owner}</span>
          <button>🗑️</button>
        </li>`
      )
      .join('\n');
    return `
    <section class="tasks"><ul>${items}</ul></section>
    `;
  }
}
