import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Header from "../components/AdminLayout/Header"
import Navigation from "../components/AdminLayout/Navigation"

export default function AdminLayout() {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/administrator/მთავარი პანელი")
    }, [])

    return (
        <div className="w-[100%] min-h-[100vh] h-[100%] bg-[rgba(248,231,243,1)]">
            <Header />
            <div className="flex gap-[37px] justify-center mt-[95px]">

                <Navigation />
            
                <Outlet />
            </div>
        </div>
    )
}
