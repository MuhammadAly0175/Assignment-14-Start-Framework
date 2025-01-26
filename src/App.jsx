import './App.css'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';


function App() {

  const router = createHashRouter([
    {
      path: "", element: <Layout />, children: [
        { path: "", element: <Home />, },
        { path: "Home", element: <Home />, },
        { path: "/About", element: <About />, },
        { path: "/Portfolio", element: <Portfolio />, },
        { path: "/Contact", element: <Contact />, },
        { path: "*", element: <div><h1>Error: Page Not Found</h1></div>, },]
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
