import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraficoModule } from './grafico/grafico.module';

@Module({
  imports: [GraficoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
