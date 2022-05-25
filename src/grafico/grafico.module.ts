import { Module } from '@nestjs/common';
import { GraficoService } from './grafico.service';
import { GraficoController, MarcaController } from './grafico.controller';

@Module({
  providers: [GraficoService],
  controllers: [GraficoController, MarcaController]
})
export class GraficoModule {}
