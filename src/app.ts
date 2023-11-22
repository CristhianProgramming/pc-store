import express from 'express';

const port = 3009;

const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hola Mundo')
})

app.listen(port,()=>{
    console.log(`servidor corriendo el el puerto ${port} ....`)
})
