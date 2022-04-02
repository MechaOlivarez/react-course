import { createContext, useState} from "react";


export const contexto = createContext()

const {Provider} = contexto

const MiProvider = ({children}) => {
    const [carrito, setCarrito] = useState()

    const [cantidad, setCantidad] = useState();
    const[total, setTotal] = useState()

    const addItem = (producto, cantidad) => {
        const copiaCarrito = [...carrito]
        const itemAlCarrito =[...producto, cantidad];
        
        if(itemExistente(producto.id)){
            let index = copiaCarrito.findIndex( item => item.id === producto.id )
            copiaCarrito[index].cantidad += cantidad;
            setCarrito(copiaCarrito)

        } else {
            copiaCarrito.push(itemAlCarrito)
            setCarrito(copiaCarrito)

        }
    }

    const itemExistente = (id) => {
     return carrito.some( item => item.id === id)
    }


    const valorDelContexto = {
        carrito: carrito,
        cantidad: cantidad,
        total: total,
        addItem: addItem
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )

    }

export default MiProvider;