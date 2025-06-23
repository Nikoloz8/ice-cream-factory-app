import { useLocation } from "react-router-dom"

export default function Button() {

    const location = useLocation()

    const isRegister = location.pathname.includes("/login_register/register")
    const isLogin = location.pathname.includes("/login_register/login")

    return (
        <div className="flex justify-center w-[100%]">
            <button className="p-[12px_24px] font-[900] text-[1.4rem] leading-[100%] text-[rgba(255,255,255,1)] bg-[rgba(4,174,210,1)] cursor-pointer rounded-[8px]">
                {isLogin ? "შესვლა" : isRegister ? "რეგისტრაცია" : ""}
            </button>
        </div>)
}
