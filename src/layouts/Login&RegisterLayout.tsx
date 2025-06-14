import { Outlet } from "react-router-dom";
import Header from "../components/ManagmentLayout/Header";
import { useForm } from "react-hook-form";
import type { TRegisterOrLogin } from "../types";

export default function LoginRegisterLayout() {

    const { register, watch, reset } = useForm<TRegisterOrLogin>({
        defaultValues: {
            emailOrPhone: "",
            password: ""
        }
    })

    return (
        <div className="w-[100%] min-h-[100vh] h-[100%] bg-[rgba(248,231,243,1)] pb-[100px]">
            <Header />
            <div className="w-[100%] flex justify-center">
                <Outlet context={{register, watch, reset}}/>
            </div>
        </div>
    )
}
