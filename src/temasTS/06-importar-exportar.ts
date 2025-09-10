import { calcularIVADos, type Producto } from './05-destructuracion-funciones';

const carrito:Producto[]=[
    {
        nombre :'Iphone 14',
        precio: 1500
    },
    {
        nombre :'Ipad Air',
        precio: 900
    },
    {
        nombre :'Macbook Pro',
        precio: 2500
    }
];

const[total, iva]=calcularIVADos(carrito);
console.log(`El total es: ${total}`);
console.log(`El IVA es: ${iva}`);


 