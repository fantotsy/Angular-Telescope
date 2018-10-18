import { Skills } from './skills';

export interface UserDto {
  id: string;
  firstName: string;
  lastName: string;
  skills: Skills;
  token: string;
}
