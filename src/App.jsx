import { Routes, Route } from 'react-router-dom'
import Login from "./components/Form/Login"
import Register from './components/Form/Register'
import Home from "./pages/Home"
import AddPeople from './components/Search/AddPeople'
import List from './components/Search/List'
import Rootlayout from './shared/component/Layout/Rootlayout'

function App() {

  return (
    // <Routes>
    //   <Route index element={<Login />}/>
    //   <Route path='/login' element={<Login />}/>
    //   <Route path='/register' element={<Register />}/>
    //   <Route path='/home' element={<Home />}/>
    // </Routes>
    <Routes>
      <Route element={<Rootlayout />}>
        <Route index element={<AddPeople />}/>
        <Route path='/add' element={<AddPeople />}/>
        <Route path='/list' element={<List />}/>
      </Route>
    </Routes>
  )
}

export default App
