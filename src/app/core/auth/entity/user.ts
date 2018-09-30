const defaultSkills = {
  primary: '',
  secondary: ''
};

export class User {
  constructor(public id: number = 1,
              public name: string = '',
              public surname: string = '',
              public skills: object = defaultSkills,
              public token: string = null) {
  }

  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }
}
