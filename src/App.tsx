import './App.css'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Admin from '../pages/Admin'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import AuthProvider from '../contexts/AuthContext';


const router = createBrowserRouter([
  {
    path: "/login",
    element:(
      <AuthProvider>
        <Login/>
      </AuthProvider>
    ),
  },
  {
    path: "/home",
    element:<Home/>,
  },
  {
    path: "/admin",
    element:<Admin/>,
  },
  {
    path: "/",
    element:<Home/>,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />

  )
}