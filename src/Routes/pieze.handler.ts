import { Router } from "express";
import * as service from "../Services/pieze.service"
export const routerStore = Router()

routerStore.get('/store/pieces/:id?', (req, res) => {
    if (req.params.id) {
        return service.getPiecesExpecific(parseInt(req.params.id)).then((r) => res.json(r))
    }
    service.getPieces().then((r) => res.json(r))
})

routerStore.post('/store/piece', (req, res) => {
    if (req.body.nombre === undefined) {
        return res.status(400).json({ message: "El cuerpo de la respuesta debe contener el valor nombre" })
    } else {
        service.createPiece(req.body.nombre).then((r) => {
            if (r === 1) {
                res.status(201).json({ message: `Recurso ${req.body.nombre} correctamente creado` })
            } else {
                res.status(400).json({ message: `No se logro crear el recurso` })
            }
        })
    }
})

routerStore.put('/store/piece/:id', (req, res) => {
    const idPiece: number = parseInt(req.params.id)
    const nombre: string = req.body.nombre;
    if (idPiece > 1 && nombre === undefined) {
        return res.status(400).json({ message: "El cuerpo de la respuesta debe contener el valor nombre y el valor de la id debe ser un numero mayor a 0" })
    }
    service.updatePiece(nombre, idPiece).then((r) => {
        if (r === 0) {
            res.status(400).json({ message: `No se logro modificar el recurso` })
        } else {
            res.status(201).json({ message: `Se modifico el recurso correctamente` })
        }

    })
})

routerStore.delete('/store/piece/:id', (req, res) => {
    const idPiece: number = parseInt(req.params.id)
    if (idPiece > 1) {
        service.deletePiece(idPiece).then((r) => {
            if (r == 0) {
                res.status(404).json({ message: "No se pudo encontrar el recurso" })
            } else {
                res.status(200).json({ message: "Se elimino correctamente el recurso" })
            }
        })
    } else {
        res.json("El valor debe ser un numero mayor a 0")
    }

})

