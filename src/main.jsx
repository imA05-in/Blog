import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router"
import {HomeP,SingUpP,LoginP, AddPostP, LogoutP, AllPosts} from "./pages/indexP.js"
import AuthLayout from "./components/AuthLayout.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "home",
        element:(
          <AuthLayout>
            <HomeP/>
          </AuthLayout>
        )
      },
      {
        path:"signup",
        element: <SingUpP/>
      },
      {
        path:"login",
        element:<LoginP/>
      },
      {
        path:"all-posts",
        element:<AllPosts/>
      },
      {
        path:"add-post",
        element:<AddPostP/>
      },
      {path:"logout",
        element:<LogoutP/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
