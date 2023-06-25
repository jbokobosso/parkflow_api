import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column({ default: true })
  isActive: boolean;

  constructor(
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    role: string,
  ) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.username = username;
    this.password = password;
    this.role = role;
  }
}
