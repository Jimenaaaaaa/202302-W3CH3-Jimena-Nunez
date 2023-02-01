/* eslint-disable no-new */
import { Footer } from './components/footer/footer';
import { Form } from './components/form/form';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { Pets } from './components/pets/pets';

import './index.scss';
import { PETS } from './mocks/pet-mock';

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: 'Inicio', path: '/home' },
  { label: 'Tares', path: '/tasks' },
  { label: 'Acerca de', path: '/about' },
];

console.log('Load sample');
new Header('#root');
new Menu('.header', menuOptions);
new Pets('main', PETS);
new Footer('#root');
new Form('main');
