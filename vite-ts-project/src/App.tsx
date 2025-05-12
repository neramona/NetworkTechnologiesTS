import { BrowserRouter,Routes, Route,} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Products from './pages/Products'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
