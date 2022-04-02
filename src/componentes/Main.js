import { Container } from "react-bootstrap"
import ItemListContainer from "./ItemListContainer"
import {Route, Routes} from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from "./Cart"


const Main = () => {
  return (
    <Container as="main" fluid>
        <h1>Bienvenidxs a nuestra tienda</h1>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoriacolor" element={<ItemListContainer/>}/>
            <Route path="/candle/:candleid" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            
        </Routes>
    </Container>
)
}

export default Main
