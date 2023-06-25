import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user: User = new User(
      createUserDto.firstname,
      createUserDto.lastname,
      createUserDto.username,
      createUserDto.password,
      createUserDto.role,
    );
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOneByUserName(username: string) {
    return this.usersRepository.findOne({ where: { username } });
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) return NotFoundError;
    return await this.usersRepository.remove(user);
  }
}
