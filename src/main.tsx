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
import ProductionManager from './pages/ManagerPanels/ProductionManager'
import UpdateStatusses from './pages/ManagerPanels/UpdateStatusses'
import Landing from './pages/Landing/Landing'

const router = createBrowserRouter([
  {
    element: <Landing />,
    path: '/'
  },
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
      },
      {
        element: <ProductionManager />,
        path: "/roles/manager/წარმოების მართვა"
      },
      {
        element: <IngredientsManagment />,
        path: "/roles/manager/ინვეტარის მართვა"
      },
      {
        element: <UpdateStatusses />,
        path: "/roles/manager/სტატუსების განახლება"
      }
    ]
  },
  {
    element: <LoginRegisterLayout />,
    path: "/login&register",
    children: [
      {
        element: <Register />,
        path: "/login&register/register/:role"
      },
      {
        element: <Login />,
        path: "/login&register/login/:role"
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
