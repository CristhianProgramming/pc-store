import { Client } from 'pg'

 export const conectarDB = async ()  =>{
    const cliente = new Client({
        host:"localhost",
        port:5432,
        user:'postgres',
        password:'12345',
        database:'store'
    });
    await cliente.connect();
    return cliente;
}

