import React from 'react'
import {useState} from 'react';

const ItemCount = ({stock, initial, onAdd})  => {

    const [contador,setContador] = useState(initial);

    function decrement () {
        
        if (contador > initial) {
        setContador(contador - 1);
        }
    }
    
    function increment() {
        if (contador < stock) {
            setContador(contador + 1);
        }  else {
            alert("Haz alcanzado el limite de nuestro stock")
            }
    }
    
    

    return (
    <div className="itemCount">
        <div className='contador'>
            <button  onClick={decrement} type="button" class="decrementoIncremento" role="button">-</button>
            <span className="numeroEstado">{contador}</span>
            <button onClick={increment} type="button" class="decrementoIncremento" role="button">+</button>    
        </div>
        <div>
        <button class="agregarCarrito" role="button" onClick={() =>onAdd(contador)} type="button">Agregar al carrito</button>

        </div>
    </div>
)
}

export default ItemCount
