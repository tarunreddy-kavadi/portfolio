
import './App.scss';
import { Routes,Route} from 'react-router-dom';
import  Layout  from './components/Layout';
import Home from './components/HOME';
import About from './components/About'
import Contact from './components/Contact';
import Certificate from './components/Certifications';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element = {<Home />} /> 
      <Route path='About' element = {<About />}/>
      <Route path='Contact' element= {<Contact />}/>
      <Route path ="certification" element={<Certificate/>}/>
        </Route>
    </Routes>
    </>
  )
}

export default App
