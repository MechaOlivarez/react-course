import React from 'react'
import { useState } from 'react';
import ItemCount from './ItemCount';



const ItemListContainer = (props) => {
    useState()
    let mensaje = props.greeting;
    return (
        <div class="divMain">
            <h1>{mensaje}</h1>
            <ItemCount
            stock = {10}
            initial = {1}/>
        </div>
        

)
}

export default ItemListContainer