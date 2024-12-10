import { Body, Injectable, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService){}

    async validateUser(email: string, password: string){
        const user = await this.userService.findByemail(email);
        if(user && user.password === password){
            
            return user;
        }
        return null;
    }
}  

