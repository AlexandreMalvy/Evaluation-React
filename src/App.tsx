
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import ViewHome from './component/view/ViewHome'
import Movies from './component/Movies'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ViewHome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Movie' element={<Movies/>}/>
      </Routes>
    </>
  )
}

export default App
