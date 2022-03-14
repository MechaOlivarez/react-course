import { useState, useEffect } from 'react';
import productos from '../baseDatos/productos.js'
import ItemDetail from './ItemDetail.js';

function getProducto() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve (productos[1]);
        },2000);
    });   
}

function ItemDetailContainer ({greeting}) {

    const [item, setItem] = useState([])
    
    useEffect(()=>{
        getProducto()
        .then(respuestaPromise => setItem(respuestaPromise))
        .catch(error => console.log(error));
        
    },[]);  

    
    return (
        <div class="divMain">
            <h2>{greeting}</h2>
            <ItemDetail item={item}></ItemDetail>
        </div>
    )
}


export default ItemDetailContainer
