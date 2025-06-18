import { useLocation, useNavigate} from "react-router-dom";
import type { TTextContent } from "../../types";

export default function TextContent({ title, value }: TTextContent) {

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div>
            <h1 className="text-[5rem] leading-[100%] text-[rgba(4,174,210,1)] text-center font-[400]">
                {title}
            </h1>
            <h4 className="text-[1.4rem] mt-[8px] flex gap-[4px] font-[700] leading-[100%] text-[rgba(0,58,70,1)] justify-center">
                <span className="font-[300]">ან</span>
                <a href="#" className="hover:underline cursor-pointer" onClick={() => {
                    if (location.pathname.includes("/login_register/login")) {
                        navigate(`/login_register/register`)
                    } else if (location.pathname.includes("/login_register/register")) {
                        navigate(`/login_register/login`)
                    }
                }}>{value}</a>
            </h4>
        </div>
    )
}
