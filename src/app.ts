import express from 'express';
import { routerHome } from './Routes/home.handler';
import { routerStore } from './Routes/store.handler';


const port = 3009;

const app = express();

app.use(express.json())
app.use(routerHome,routerStore)

app.listen(port,()=>{
    console.log(`servidor corriendo el el puerto ${port} ....`)
})
