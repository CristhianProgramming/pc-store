import { Router } from "express";

export const routerHome = Router();

routerHome.get('/',(req,res)=>{
    res.json('Hola Mundo')
})

