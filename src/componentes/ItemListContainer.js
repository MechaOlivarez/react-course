import React from 'react'

const ItemListContainer = (props) => {
    
    let mensaje = props.greeting;
    return (
        <h1>{mensaje}</h1>

)
}

export default ItemListContainer