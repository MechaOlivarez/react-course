
import { useState, useEffect } from 'react';
import productos from '../baseDatos/productos.js'
import ItemList from './ItemList.js';
import { useParams} from 'react-router-dom'

function getDatos(categoriacolor) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve (productos.filter ( item => item.color !== categoriacolor));
        },2000);
    });   
}

function ItemListContainer () {

    const [items, setItems] = useState([])
    const {categoriacolor} = useParams()
    
    useEffect(()=>{
        getDatos(categoriacolor)
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