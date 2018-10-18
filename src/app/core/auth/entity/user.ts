import { Skills } from './skills';

export class User {
  constructor(public id: string = '1',
              public name: string = '',
              public surname: string = '',
              public skills: Skills = new Skills(),
              public token: string = null) {
  }

  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }
}
