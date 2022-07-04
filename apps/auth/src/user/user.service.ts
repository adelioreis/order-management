import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass  } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor( 
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const entity = plainToClass(User, {...createUserDto, createdDate: new Date()});
    return await this.userRepository.save(entity);
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return  users.map(user => (this.transformUserToReturn(user)));
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) this.returnNotFound();
    return this.transformUserToReturn(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {
    const entity = plainToClass(User, {...updateUserDto, updatedDate: new Date()});
    await this.userRepository.update(id, entity);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async login(loginDto: LoginUserDto): Promise<User> {
      const user = await this.userRepository.findOneBy(plainToClass(User, loginDto));
      if (!user) {
        throw new UnauthorizedException();
      };

      return this.transformUserToReturn(user);
  }  

  private transformUserToReturn = (user: User): User => {
    delete user.password;
    const {password, ...result} = user;
    return plainToClass(User, result);
  }

  private returnNotFound() {
    throw new HttpException({
      status: HttpStatus.NOT_FOUND,
      error: 'Not found.',
    }, HttpStatus.NOT_FOUND);
  }
}
