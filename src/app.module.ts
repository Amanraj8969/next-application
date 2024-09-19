import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';  // Import ConfigService for dynamic configuration
import { TaskModule } from './task/task.module';
import { TeamModule } from './team/team.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Load environment variables and make them globally available
    ConfigModule.forRoot({
      isGlobal: true,  // Make environment variables globally available across all modules
    }),
    
    // TypeORM configuration for MongoDB using ConfigService to get DATABASE_URL from .env
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mongodb',
        url: configService.get<string>('DATABASE_URL'),  // Use DATABASE_URL from .env
        synchronize: true,  // Automatically synchronize schema
        useUnifiedTopology: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],  // Load both .ts and .js entity files
      }),
    }),

    // Import application modules
    TaskModule,
    TeamModule,
    AuthModule,
  ],
})
export class AppModule {}
