import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export default function Layout() {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/administrator/მთავარი პანელი")
    }, [])

    return (
        <div className="w-[100%] min-h-[100vh] h-[100%] bg-[rgba(248,231,243,1)]">
            <Outlet />
        </div>
    )
}
