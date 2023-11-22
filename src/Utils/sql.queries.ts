
export class queries {
    public QUERY_FIND_PIECES = "SELECT * FROM public.piezas"
    public QUERY_CREATE_PIECE = "INSERT INTO public.piezas(nombre) VALUES ($1)"
    public QUERY_DELETE_PIECE = "DELETE FROM public.piezas WHERE id = $1"
    public QUERY_UPDATE_PIECE = "UPDATE public.piezas SET nombre=$1 WHERE id=$2"
}


