import { Router } from "express";
import * as service from "../Services/productos.service"
export const productosRouter = Router();

const prefix = "/store/producto"

productosRouter.get(`${prefix}s/:id?`, (req, res) => {
    if (req.params.id) {
        return service.getProductosEspecific(parseInt(req.params.id)).then((r) => res.json(r))
    }
    service.getAllProductos().then((r) => {
        res.json(r)
    })
})

productosRouter.post(prefix, (req, res) => {
    if (req.body.type === undefined || req.body.nombre === undefined) {
        return res.status(400).json({ message: `Hace falta parametros para la solicitud` })
    } else {
        service.createProduct(req.body.marca, req.body.type, req.body.stock, req.body.nombre).then((r: any) => {
            if (r.message == undefined) {
                if (r === 1) {
                    return res.status(200).json({ message: "Producto correctamente creado" })
                }
                return res.status(400).json({ message: "No se logro crear el producto" })
            } else {
                return res.status(404).json(r)
            }

        })
    }
})

productosRouter.put(`${prefix}/:id`, (req, res) => {
    const idProduct = parseInt(req.params.id);
    if (idProduct > 0) {
        service.actualizarProduct(idProduct, req.body.marca, req.body.type, req.body.stock, req.body.nombre)
            .then((r) => {
                if (r == 1) {
                    return res.status(201).json("Se realizo la modifiaccion correctamente")
                }else{
                    return res.status(404).json(r)
                }
            }).catch((r) => {
              return  res.status(404).json(r)
            })
    }else{
        res.status(402).json("No se pudo encontrar el prodcuto")
    }
    
})

productosRouter.delete(`${prefix}/:id`, (req, res) => {
    const idProducto = parseInt(req.params.id)
    if (idProducto > 0) {
        service.eliminarProduct(idProducto).then((r) => {
            if (r === 1) {
                return res.status(204).json();
            }
            return res.status(404).json({ message: "No se logro eliminar la categoria" });
        })
    } else {
        res.status(404).json({ message: "La referencia no es valida" })
    }
})