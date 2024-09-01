import Home from './Home'
import FSD from './FSD'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Career1 from './Career1'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route index path = "/" element={<Home/>} />
        <Route path = "fsd" element={<FSD/>} />
        <Route path = "datascience" element={<DataScience/>} />
        <Route path = "cybersecurity" element={<CyberSecurity/>} />
        <Route path = "career" element={<Career1/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
