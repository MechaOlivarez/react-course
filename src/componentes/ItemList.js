
import Item from "./Item.js"


const ItemList = ({items}) => {
  return (
    <section className="sectionCards">
        {items.map(item => {
            return(
        <div key={item.id}>
            <Item item={item}/>  
        </div>
            )
        
        })}      
    </section>
)
}

export default ItemList