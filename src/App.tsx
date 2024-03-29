import './assets/sass/main.sass'
import Card from './Card'
import Header from './Header'
import Data from './perritos.json'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Header titulo="Adopta un perrito"></Header>
      <Card data={Data}></Card>
      <Footer></Footer>
    </>
  )
}

export default App
