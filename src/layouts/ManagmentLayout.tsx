// import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/ManagmentLayout/Header"
import Navigation from "../components/ManagmentLayout/Navigation"

export default function AdminLayout() {

    // const navigate = useNavigate()

    // useEffect(() => {
    //     navigate("/roles/მთავარი პანელი")
    // }, [])

    return (
        <div className="w-[100%] min-h-[100vh] h-[100%] bg-[rgba(248,231,243,1)] pb-[100px]">
            <Header />
            <div className="flex gap-[37px] justify-center mt-[95px]">

                <Navigation />
                <div className="mt-[26px]">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
