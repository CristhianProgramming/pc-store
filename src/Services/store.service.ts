import {queries} from '../Utils/sql.queries'
import { conectarDB } from './connection.database'

const Queries = new queries();

export const getPieces = async () => {
    try {
        const db = await conectarDB();
        const query = db.query(Queries.QUERY_FIND_PIECES)
        return (await query).rows
    } catch (error) {
        return { message: error }
    }
}

export const createPiece = async (nombre:string) => {
    try {
        const db = await conectarDB();
        const query = db.query(Queries.QUERY_CREATE_PIECE,[nombre])
        return (await query).rowCount
    } catch (error) {
        return { message: error }
    }
}

export const deletePiece = async (id:number) => {
    try {
        const db = await conectarDB();
        const query = db.query(Queries.QUERY_DELETE_PIECE,[id])
        return (await query).rowCount
    } catch (error) {
        return { message: error }
    }
}

export const updatePiece = async (nombre:string,id:number) => {
    try {
        const db = await conectarDB();
        const query = db.query(Queries.QUERY_UPDATE_PIECE,[nombre,id])
        return (await query).rowCount
    } catch (error) {
        return { message: error }
    }
}


