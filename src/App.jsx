import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Blog from './pages/Blog.Jsx';
import Layout from './Layout';
import Menu from './components/Menu';
import LeftSide from './components/leftSide';

function App() {

  return (
    <>
        <Menu />
        <div className='body'>
            <LeftSide />
            <BrowserRouter>
                  <Routes>
                    <Route>
                      <Route path="/" element={<Layout />}>
                          <Route index element={<Home />} />
                          <Route path="/resume" element={<Resume />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="/blog" element={<Blog />} />
                      </Route>  
                    </Route>
                  </Routes>
            </BrowserRouter>
        </div>
    </>
    
  )
}

export default App
