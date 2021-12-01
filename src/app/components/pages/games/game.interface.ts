import { User } from 'src/app/interfaces/user.interface';

export interface GameOptions {
  type: string;
  amount: string;
  users: User[];
}
