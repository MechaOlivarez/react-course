import { useState, useEffect } from 'react';
import productos from '../baseDatos/productos.js'
import ItemDetail from './ItemDetail.js';
import { useParams} from 'react-router-dom'


function getProducto(candleid) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve (productos.find ( item => item.id === candleid));

        },2000);
    });   
}

function ItemDetailContainer () {

    const [item, setItem] = useState([])
    const {candleid} = useParams()
    
    useEffect(()=>{
        getProducto(candleid)
        .then(respuestaPromise => setItem(respuestaPromise))
        .catch(error => console.log(error));
        
    },[candleid]);  

    
    return (
        <div>
            <ItemDetail item={item}></ItemDetail>
        </div>
    )
}


export default ItemDetailContainer
