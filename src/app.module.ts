import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserController } from "./_user/user.controller";
import { UserModule } from './user/user.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/entity/user.entity";

@Module({
    controllers: [AppController],
    imports: [
            UserModule,
            TypeOrmModule.forRoot({
                type: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: '',
                database: 'nestjs',
                entities: [User],
                synchronize: true,
            }),
    ],
    
})
export class AppModule {}