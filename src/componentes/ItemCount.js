import React from 'react'
import {useState} from 'react';

const ItemCount = ({stock, initial})  => {

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
    
    function onAdd() {
        alert('Agregaste ' + contador + ' productos al carrito');

    }

    return (
    <div class="itemCount">
        <div>
            <button onClick={decrement} type="button" class="contadorButton">-</button>
            <span class="contadorEstado">{contador}</span>
            <button onClick={increment} type="button" class="contadorButton">+</button>    
        </div>
        <div>
        <button class="agregarCarritoButton" onClick={onAdd} type="button">Agregar al carrito</button>
        </div>
    </div>
)
}

export default ItemCount