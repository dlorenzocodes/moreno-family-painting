import Home from './pages/Home'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <main>
        <NavBar />
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/our-work' element={<Portfolio/>}/>
            <Route exact path='/contact-us' element={<Contact/>}/>
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
