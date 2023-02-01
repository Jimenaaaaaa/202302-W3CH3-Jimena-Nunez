/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './form.scss';

export class Form extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  private createTemplate() {
    const form = `
          <form>
          <div>
            <label for="name">Pet's name:</label>
            <input type="text" id="name">
          </div>
          <div>
            <label for="breed">Breed:</label>
            <input type="text" id="breed">
          </div>
          <div>
            <label for="owner">Owner:</label>
            <input type="text" id="owner">
          </div>
            <button class='submit'>Submit</button>
          </form>
        `;
    return `
    <section class="form">${form}</section>
    `;
  }
}


const button = document.querySelector('.submit')!;

// button.addEventListener('click', () => {
//   // const name1 = document.querySelector('#name')!;
//   // const breed1 = document.querySelector('#breed')!;
//   // const owner1 = document.querySelector('#owner')!;

//   // // const name: string = name1.value;
//   // // const breed: string = breed1.value;
//   // // const owner: string = owner1.value


// });