import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import type { TFormFunctions, TTextContent } from "../../types";

export default function TextContent({ title, value }: TTextContent) {

    const navigate = useNavigate()
    const location = useLocation()

    const { clearErrors } = useOutletContext<TFormFunctions>()

    const isRegister = location.pathname.includes("/login_register/register")
    const isLogin = location.pathname.includes("/login_register/login")

    return (
        <div>
            <h1 className="text-[5rem] leading-[100%] text-[rgba(4,174,210,1)] text-center font-[400]">
                {title}
            </h1>
            <h4 className="text-[1.4rem] mt-[8px] flex gap-[4px] font-[700] leading-[100%] text-[rgba(0,58,70,1)] justify-center">
                <span className="font-[300]">ან</span>
                <a href="#" className="hover:underline cursor-pointer" onClick={() => {
                    clearErrors()
                    isLogin ? navigate(`/login_register/register`) : isRegister ? navigate(`/login_register/login`) : ""
                }}>{value}</a>
            </h4>
        </div>
    )
}
