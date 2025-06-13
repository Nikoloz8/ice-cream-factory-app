import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
AdminMainPanel
import AdminLayout from './layouts/AdminLayout'
import AdminMainPanel from './pages/AdminPanels/AdminMainPanel'
import RoleManagment from './pages/AdminPanels/RoleManagment'
import SystemParameters from './pages/AdminPanels/SystemParameters'
import Statistics from './pages/AdminPanels/Statistics'

const router = createBrowserRouter([
  {
    element: <AdminLayout />,
    path: "/administrator",
    children: [
      {
        element: <AdminMainPanel />,
        path: "/administrator/მთავარი პანელი"
      },
      {
        element: <RoleManagment />,
        path: "/administrator/როლების მართვა"
      },
      {
        element: <SystemParameters />,
        path: "/administrator/სისტემის პარამეტრები"
      },
      {
        element: <Statistics />,
        path: "/administrator/ანგარიშგება & სტატისტიკა"
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
