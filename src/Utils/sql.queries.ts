
export const queries: any = { 
    //PIEZAS
    QUERY_FIND_PIECES: "SELECT * FROM public.piezas",
    QUERY_FIND_PIECES_BYID: "SELECT * FROM public.piezas Where id = $1",
    QUERY_CREATE_PIECE: "INSERT INTO public.piezas(nombre) VALUES ($1)",
    QUERY_DELETE_PIECE: "DELETE FROM public.piezas WHERE id = $1",
    QUERY_UPDATE_PIECE: "UPDATE public.piezas SET nombre=$1 WHERE id=$2",
    //PRODUCTOS
    QUERY_FIND_PRODUCTS: "SELECT * FROM public.productos",
    QUERY_FIND_EXPECIFIC_PRODUCTS: "SELECT * FROM public.productos WHERE id=$1",
    QUERY_DELETE_PRODUCT: "DELETE FROM public.productos WHERE id=$1",
    QUERY_INSERT_PRODUCT: `INSERT INTO public.productos(marca, "typeProduct", stock, nombre) VALUES ($1, $2, $3, $4)`,
    QUERY_UPDATE_PRODUCT: `UPDATE public.productos SET marca=$1, "typeProduct"=$2, stock=$3, nombre=$4 WHERE id =$5;`
}
