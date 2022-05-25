import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GraficoService } from './grafico.service';

@Controller('grafico')
export class GraficoController {
    constructor(private readonly graficoService: GraficoService) { }

    @Get()
    async getAll() {
        return await this.graficoService.getCategoria();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.graficoService.getProducto(id);
    }
}

@Controller('marca')
export class MarcaController{
    constructor(private readonly graficoService: GraficoService) { }
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.graficoService.getMarca(id);
    }
}
