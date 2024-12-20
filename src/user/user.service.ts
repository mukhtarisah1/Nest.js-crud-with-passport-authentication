import { Body, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/user-update.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    get(): Promise<User []>{
        return this.userRepository.find();
    }

    create(createUserDto:CreateUserDto){
        return this.userRepository.save(createUserDto);
    }

    update(updateUserDto: UpdateUserDto, userId: number,){
        return this.userRepository.update(userId, updateUserDto);
    }

    show(id){
        return this.userRepository.findOne({where: {id}});
    }

    findByemail(email: string){
        return this.userRepository.findOne({where: {email}});
    }

    delete(userId:number){
        return this.userRepository.delete(userId);
    }



}
