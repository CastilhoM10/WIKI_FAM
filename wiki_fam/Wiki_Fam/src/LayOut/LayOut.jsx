
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
// Paginas............

import Login from '../pages/login/Login'
import Home from '../pages/home/home.jsx'
import Profile from '../pages/profile/Profile.jsx'
import Novidade from '../pages/novidades/Novidade.jsx'
import ManualCalouro from '../pages/manual/ManualCalouro.jsx'
import Eventos from '../pages/eventos/Eventos.jsx'
import MapaFam from '../components/mapaFam/MapaFam.jsx'

// Components............
import Nav from '../components/nav/Nav.jsx'
import LeftBar from '../components/leftbar/LeftBar.jsx'
import RightBar from '../components/rigthbar/RightBar.jsx'
import Departamentos from '../pages/departamentos/Departamentos.jsx'


export default function LayOut() {
  const Feed =()=>{
    return(
      <>
      <Nav/>
      <main>
        <LeftBar/>
        <div className="container">
          <Outlet/>
        </div>
        <RightBar/>
      </main>
      </>
    )
  }



  const router = createBrowserRouter([
    {
      path: '/',
      element : <Feed/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/profile/:id',
          element: <Profile/>
        },
        {
          path: '/novidade',
          element: <Novidade/>
        },
        {
          path: '/Manual',
          element: <ManualCalouro/>
        },
        {
          path: '/eventos',
          element: <Eventos/>
        },
        {
          path: '/MapaFam',
          element: <MapaFam/>
        },
        {
          path: '/Departamentos',
          element: <Departamentos/>
        }
      ]
    },
    {
      path: '/login',
      element: < Login/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
