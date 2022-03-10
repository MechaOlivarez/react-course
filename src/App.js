
import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import ItemListContainer from "./componentes/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter} from "react-router-dom"


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <ItemListContainer greeting="Bienvenidxs a nuestra tienda!"/>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App

