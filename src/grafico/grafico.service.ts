import { Injectable, NotFoundException } from '@nestjs/common';

const categoria = [{
    "id": 1,
    "name": "Hogar"
},
{
    "id": 2,
    "name": "Ropa"
},
{
    "id": 3,
    "name": "Deportes"
},
{
    "id": 4,
    "name": "Accesorios"
},
];

const producto = [{
    "id": 1,
    "categoria_id":1,
    "name": "estufa"
},
{
    "id": 2,
    "categoria_id":1,
    "name": "lavadora"
},
{
    "id": 3,
    "categoria_id":1,
    "name": "comedor"
},
{
    "id": 4,
    "categoria_id":1,
    "name": "mueble"
},
{
    "id": 5,
    "categoria_id":2,
    "name": "pantalón"
},
{
    "id": 6,
    "categoria_id":2,
    "name": "camisa"
},
{
    "id": 7,
    "categoria_id":2,
    "name": "camiseta"
},
{
    "id": 8,
    "categoria_id":2,
    "name": "vestido"
},
{
    "id": 9,
    "categoria_id":3,
    "name": "camisa deportiva"
},
{
    "id": 10,
    "categoria_id":3,
    "name": "short"
},
{
    "id": 11,
    "categoria_id":3,
    "name": "balon futbol"
},
{
    "id": 12,
    "categoria_id":3,
    "name": "tenis"
},
{
    "id": 13,
    "categoria_id":4,
    "name": "reloj"
},
{
    "id": 14,
    "categoria_id":4,
    "name": "cobertor"
},
{
    "id": 15,
    "categoria_id":4,
    "name": "audifonos"
},
{
    "id": 16,
    "categoria_id":4,
    "name": "mouse"
},
];

const marca = [{
    "id": 1,
    "producto_id": 1,
    "name": "estufa1"
},
{
    "id": 2,
    "producto_id": 1,
    "name": "estufa2"
},
{
    "id": 3,
    "producto_id": 2,
    "name": "lavadora1"
},
{
    "id": 4,
    "producto_id": 2,
    "name": "lavadora2"
},
{
    "id": 5,
    "producto_id": 3,
    "name": "comedor1"
},
{
    "id": 6,
    "producto_id": 3,
    "name": "comedor2"
},
{
    "id": 7,
    "producto_id": 4,
    "name": "mueble1"
},
{
    "id": 8,
    "producto_id": 4,
    "name": "mueble2"
},
{
    "id": 9,
    "producto_id": 5,
    "name": "panatalón1"
},
{
    "id": 10,
    "producto_id": 5,
    "name": "panatalón2"
},
,
{
    "id": 11,
    "producto_id": 6,
    "name": "camisa1"
},
{
    "id": 12,
    "producto_id": 6,
    "name": "camisa2"
},
{
    "id": 13,
    "producto_id": 7,
    "name": "camiseta1"
},
{
    "id": 14,
    "producto_id": 7,
    "name": "camiseta2"
},
{
    "id": 15,
    "producto_id": 8,
    "name": "vestido1"
},
{
    "id": 16,
    "producto_id": 8,
    "name": "vestido2"
},
{
    "id": 17,
    "producto_id": 9,
    "name": "camisa deportiva1"
},
{
    "id": 18,
    "producto_id": 9,
    "name": "camisa deportiva2"
},
{
    "id": 19,
    "producto_id": 10,
    "name": "short1"
},
{
    "id": 20,
    "producto_id": 10,
    "name": "short2"
},
{
    "id": 21,
    "producto_id": 11,
    "name": "balon futbol1"
},
{
    "id": 22,
    "producto_id": 11,
    "name": "balon futbol2"
},
{
    "id": 23,
    "producto_id": 12,
    "name": "tenis1"
},
{
    "id": 24,
    "producto_id": 12,
    "name": "tenis2"
},
{
    "id": 25,
    "producto_id": 13,
    "name": "reloj1"
},
{
    "id": 26,
    "producto_id": 13,
    "name": "reloj2"
},
{
    "id": 27,
    "producto_id": 14,
    "name": "cobertor1"
},
{
    "id": 28,
    "producto_id": 14,
    "name": "cobertor2"
},
{
    "id": 29,
    "producto_id": 15,
    "name": "audifono1"
},
{
    "id": 30,
    "producto_id": 15,
    "name": "audifono2"
},
{
    "id": 31,
    "producto_id": 16,
    "name": "mmouse1"
},
{
    "id": 32,
    "producto_id": 16,
    "name": "mmouse2"
},

];

@Injectable()
export class GraficoService {

    async getCategoria(): Promise<any>{
        const data = categoria;
        if(!data.length){
            throw new NotFoundException({message: 'lista vacia'})
        }
        console.log(data);
        return data;
    }

    async getProducto(id: number): Promise<any>{
        let data = [];
        const datos = producto.map((i)=>{
            if(i.categoria_id == id){
                //data = [];
                data.push(i);
            }
        }) 
        if(!data){
            throw new NotFoundException({message: 'lista vacia'})
        }
        return data;
    }

    async getMarca(id:number): Promise<any>{
        const data = [];
        const datos = marca.map((i)=>{
            if(i.producto_id == id){
                //data = [];
                data.push(i);
            }
        }) 
        if(!data){
            throw new NotFoundException({message: 'lista vacia'})
        }
        return data;
    }
    
}
