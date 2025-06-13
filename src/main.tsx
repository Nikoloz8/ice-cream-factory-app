import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
AdminMainPanel
import AdminLayout from './layouts/AdminLayout'
import AdminMainPanel from './pages/AdminPanels/AdminMainPanel'
import RoleManagment from './pages/AdminPanels/RoleManagment'

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
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
