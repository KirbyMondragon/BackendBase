import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AccessRightsModule } from './access-rights/access-rights.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // Permite acceso a las variables de entorno en toda la app
    }),

    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.5`,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    AuthModule,

    AccessRightsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
