import {queries} from '../Utils/sql.queries'
import {conectarDB} from './connection.database'

export const getPieces = async () => {
    try {
        const db = await conectarDB();
        const query = db.query(queries.QUERY_FIND_PIECES)
        return (await query).rows
    } catch (error) {
        return { message: error }
    }
}

export const getPiecesExpecific = async (id : number) => {
    try {
        const db = await conectarDB();
        const query = db.query(queries.QUERY_FIND_PIECES_BYID,[id])
        return (await query).rows[0]
    } catch (error) {
        return { message: error }
    }
}

export const createPiece = async (nombre:string) => {
    try {
        const db = await conectarDB();
        const query = db.query(queries.QUERY_CREATE_PIECE,[nombre])
        return (await query).rowCount
    } catch (error) {
        return { message: error }
    }
}

export const deletePiece = async (id:number) => {
    try {
        const db = await conectarDB();
        const query = db.query(queries.QUERY_DELETE_PIECE,[id])
        return (await query).rowCount
    } catch (error) {
        return { message: error }
    }
}

export const updatePiece = async (nombre:string,id:number) => {
    try {
        const db = await conectarDB();
        const query = db.query(queries.QUERY_UPDATE_PIECE,[nombre,id])
        return (await query).rowCount
    } catch (error) {
        return { message: error }
    }
}




