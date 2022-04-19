import { createContext, useState} from "react";


export const contexto = createContext()

const { Provider } = contexto;

const MiProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState([]);

    const addItem = (producto, cantidad) => {
        const copiaCarrito = [...carrito]
        const itemAlCarrito ={...producto, cantidad}
        
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

    const limpiarCarrito = () => {
        setCarrito([])

    }

    const removeItem = (id) => {

        const itemFiltrado = carrito.filter((producto)=> producto.id !== id)
        setCarrito(itemFiltrado)
    }

    const calcCantidad = () => {
        let cantidad = 0;
        carrito.forEach(item => cantidad += cantidad = item.cantidad);
        return cantidad;
    }

    const calcTotal = () => {
        let total = 0;
        carrito.forEach( item => total  += item.cantidad * item.precio)
        return total;
        
    }

    const valorDelContexto = {
        carrito: carrito,
        calcCantidad: calcCantidad,
        addItem: addItem,
        limpiarCarrito,
        calcTotal,
        calcTotal,
        removeItem
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )

    }

export default MiProvider;