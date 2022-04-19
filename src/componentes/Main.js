import { Container } from "react-bootstrap";
import ItemListContainer from "./ItemListContainer";
import {Route, Routes} from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import Formulario from "./Formulario";


const Main = () => {
  return (
    <>

    <Container as="main" fluid>
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/categoria/:categoriacolor" element={<ItemListContainer/>}/>
            <Route path="/candle/:candleid" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/formulario" element={<Formulario/>}  />      
        </Routes>
    </Container>
    </>
    
)
}

export default Main
