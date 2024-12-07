import { Controller, Get, Delete, Param, Patch, Post, Req } from "@nestjs/common";


@Controller('/user')
export class UserController {

    @Get() 
    getUsers(){
        return { name: 'murifantasoia', email: 'murifantasia@yahoo.com'};
    }

    @Post()
    store(@Req() req: Request){
        return req.body;
    }

    @Get('/:userId')
    getUser(@Param() params: {userId: number}){
        return params;
    }

    @Patch('/:userId')
    patchUser(@Param() params: {userId: number}){
        return params;
    }

    @Delete('/:userId')
    deleteUser(@Param() params: {userId: number}){
        return params;
    }
}