import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail.js';
import { useParams} from 'react-router-dom';
import { getCandle } from '../firebase';


function ItemDetailContainer () {

    const [item, setItem] = useState()
    const {candleid} = useParams()
    
    useEffect(()=>{
        getCandle(candleid)
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
