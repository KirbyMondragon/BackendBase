import { Module } from '@nestjs/common';
import { AccessRightsService } from './access-rights.service';
import { AccessRightsController } from './access-rights.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([])
  ],
  controllers: [AccessRightsController],
  providers: [AccessRightsService],
  exports:[TypeOrmModule, AccessRightsService]
})
export class AccessRightsModule {}
