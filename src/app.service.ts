import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.model';

@Injectable()
export class AppService {
  private users: Usuario[] = [
    { id: '1', name: 'Usuario Demo 1', age: 25 },
    { id: '2', name: 'Usuario Demo 2', age: 30 },
  ];

  async getUsers(): Promise<Usuario[]> {
    return this.users;
  }

  async getUserById(id: string): Promise<Usuario> {
    return this.users.find((user) => user.id === id);
  }

  async createUser(name: string, age: number): Promise<Usuario> {
    const newUser: Usuario = {
      id: (this.users.length + 1).toString(),
      name,
      age,
    };
    this.users.push(newUser);
    return newUser;
  }
}
