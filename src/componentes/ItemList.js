
import Item from "./Item.js"


const ItemList = ({items, saludo}) => {
  return (
    <>
    <h3 className="saludo-inicial">{saludo}</h3>
    <section className="sectionCards">
        {items.map(item => {
            return(
        <div key={item.id}>
            <Item item={item}/>  
        </div>
            )
        
        })}      
    </section>
    </>
    
)
}

export default ItemList