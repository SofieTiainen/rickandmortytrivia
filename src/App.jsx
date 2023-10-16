// import rickMorty from '/rickmorty.png'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Root from './routes/Root';
import Home from './routes/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/rickandmortytrivia' element={<Root />} >
      <Route index element={<Home />} /> 
    </Route>
  )
)

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
          {/* <img src={rickMorty} className="logo" alt="Vite logo" /> */}
    </div>
  )
}

export default App
