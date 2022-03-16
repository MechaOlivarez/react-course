
import { useState, useEffect } from 'react';
import productos from '../baseDatos/productos.js'
import ItemList from './ItemList.js';

function getDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve (productos);
        },2000);
    });   
}

function ItemListContainer () {

    const [items, setItems] = useState([])
    
    useEffect(()=>{
        getDatos()
        .then(respuestaPromise => setItems(respuestaPromise))
        .catch(error => console.log(error));
        
    },[]);  

    
    return (
        <div>
            <ItemList items={items}/>
        </div>
    )
}


export default ItemListContainer