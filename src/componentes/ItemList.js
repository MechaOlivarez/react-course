import productos from "../baseDatos/productos.js"
import Item from "./Item.js"


const ItemList = ({items}) => {
  return (
    <section className="sectionCard">
        {productos.map(item => {
            return(
        <div>
            <Item
                key={item.id}
                item={item}
            />  
        </div>
            )
        
        })}      
    </section>
)
}

export default ItemList