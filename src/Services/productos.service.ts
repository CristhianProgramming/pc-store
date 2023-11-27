import { conectarDB } from './connection.database'
import { queries } from '../Utils/sql.queries'


export const getAllProductos = async () => {
    try {
        const db = await conectarDB()
        const query = db.query(queries.QUERY_FIND_PRODUCTS)
        return (await query).rows
    } catch (error) {
        return { message: error }
    }
}

export const getProductosEspecific = async (id: number) => {
    try {
        const db = await conectarDB()
        const query = db.query(queries.QUERY_FIND_EXPECIFIC_PRODUCTS, [id])
        return (await query).rows[0]
    } catch (error) {
        return { message: error }
    }
}

export const createProduct = async (marca: string = "GENERIC", type: number, stock: number = 0, nombre: string) => {
    try {
        const db = await conectarDB()
        const find = db.query(queries.QUERY_FIND_PIECES_BYID, [type])
        const category = (await find).rows
        if (category.length == 1) {
            const query = db.query(queries.QUERY_INSERT_PRODUCT, [marca, type, stock, nombre])
            return (await query).rowCount
        } else {
            return { message: "El categoria ingresada no existe" }
        }
    } catch (error) {
        return { message: error }
    }
}

export const actualizarProduct = async (idProduct: number, marca: string | undefined, type: number | undefined, stock: number | undefined = 0, nombre: string | undefined) => {
    try {
        const db = await conectarDB()
        let category = 0;
        if (type && type !== undefined) {
            const find = db.query(queries.QUERY_FIND_PIECES_BYID, [type])
            category = (await find).rows.length
        } else {
            category = 1
        }
        if (category === 1) {
            const find = db.query(queries.QUERY_FIND_EXPECIFIC_PRODUCTS, [idProduct])
            const objectFromDb: any = (await find).rows[0]

            if (marca && marca !== undefined && marca !== objectFromDb.marca) {
                objectFromDb.marca = marca
            }
            if (type && type !== undefined && type !== objectFromDb.typeProduct) {

                objectFromDb.typeProduct = type
            }
            if (stock && stock !== undefined && stock !== objectFromDb.stock) {
                objectFromDb.stock = stock
            }
            if (nombre && nombre !== undefined && nombre !== objectFromDb.nombre) {
                objectFromDb.nombre = nombre
            }
            const update = db.query(queries.QUERY_UPDATE_PRODUCT, [objectFromDb.marca, objectFromDb.typeProduct, objectFromDb.stock, objectFromDb.nombre, idProduct])
            return (await update).rowCount
        }
    } catch (error: any) {
        return { message: error.detail }
    }


}

export const eliminarProduct = async (idProduct: number) => {
    try {
        const db = await conectarDB()
        const query = db.query(queries.QUERY_DELETE_PRODUCT, [idProduct])
        return (await query).rowCount
    } catch (error) {
        return { message: "El producto ingresado no existe" }
    }
}

