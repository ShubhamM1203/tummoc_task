import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home/home'
import { Login } from './Components/login/login'
import { Navbar } from './Components/Navbar/navbar'
import { SignUp } from './Components/SignUp/signup'

function App() {
 

 
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
     
     <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>

     </Routes>
    
    </div>
  )
}

export default App
