
import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import ItemListContainer from "./componentes/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter} from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer"


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    {/*<ItemListContainer greeting="Bienvenidxs a nuestra tienda!"/>*/}
    <ItemDetailContainer greeting= "Desafio Item Detail Container"/>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App

