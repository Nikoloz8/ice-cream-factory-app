import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
AdminMainPanel
import ManagmentLayout from './layouts/ManagmentLayout'
import AdminMainPanel from './pages/AdminPanels/AdminMainPanel'
import RoleManagment from './pages/AdminPanels/RoleManagment'
import SystemParameters from './pages/AdminPanels/SystemParameters'
import Statistics from './pages/AdminPanels/Statistics'
import OrderManagment from './pages/AdminPanels/OrderManagment'
import IngredientsManagment from './pages/AdminPanels/IngredientsManagment'
import LoginRegisterLayout from './layouts/Login&RegisterLayout'
import Register from './pages/Login&Register/Register'
import Login from './pages/Login&Register/Login'
import ManagerMainPanel from './pages/ManagerPanels/ManagerMainPanel'

const router = createBrowserRouter([
  {
    element: <ManagmentLayout />,
    path: "/roles",
    children: [
      {
        element: <AdminMainPanel />,
        path: "/roles/administrator/მთავარი პანელი"
      },
      {
        element: <RoleManagment />,
        path: "/roles/administrator/როლების მართვა"
      },
      {
        element: <SystemParameters />,
        path: "/roles/administrator/სისტემის პარამეტრები"
      },
      {
        element: <Statistics />,
        path: "/roles/administrator/ანგარიშგება & სტატისტიკა"
      },
      {
        element: <OrderManagment />,
        path: "/roles/administrator/შეკვეთების მართვა"
      },
      {
        element: <IngredientsManagment />,
        path: "/roles/administrator/ინგრედიენტების მართვა"
      },
      {
        element: <ManagerMainPanel />,
        path: "/roles/manager/მთავარი"
      }
    ]
  },
  {
    element: <LoginRegisterLayout />,
    path: "/login&register",
    children: [
      {
        element: <Register />,
        path: "/login&register/register"
      },
      {
        element: <Login />,
        path: "/login&register/login"
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
