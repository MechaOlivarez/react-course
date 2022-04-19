
import { useState, useEffect } from 'react';
import ItemList from './ItemList.js';
import { useParams } from 'react-router-dom';
import {getAllCandles} from "../firebase";
import {getCandlesbyCategory} from "../firebase";


function ItemListContainer () {

    const [items, setItems] = useState([])
    const {categoriacolor} = useParams()
    const [loading, setLoading] = useState(true)
    
    useEffect(()=> {

    if (categoriacolor) {
        getCandlesbyCategory(categoriacolor)
        .then(respuestaPromise => setItems(respuestaPromise))
    }
    else {
        getAllCandles()
        .then(respuestaPromise => setItems(respuestaPromise))
        .catch(error => console.log(error));
    }
        
    },[categoriacolor]); 

    return (
        <div>
            <ItemList saludo="Bienvenidos a nuestra tienda!" items={items}/>
        </div>
    ) 
}

export default ItemListContainer


