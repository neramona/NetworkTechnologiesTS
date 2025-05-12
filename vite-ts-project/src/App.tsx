import { BrowserRouter,Routes, Route,} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Blog from './pages/Blog'
import { useEffect, useState } from 'react'


function App() {
  const [data, setData] = useState<{ message: string; title: string } | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home serverData={data} />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
