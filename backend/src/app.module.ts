import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [AuthModule, UserModule, ConfigModule.forRoot(), ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
