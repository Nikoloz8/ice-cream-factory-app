import { useMatch } from "react-router-dom";

export default function Header() {



    return (
        <header className="flex bg-[rgba(0,58,70,1)] justify-center items-center p-[16px_64px_16px_64px]">
            <div className="flex w-[1110px] items-center justify-between">
                <h3 className="font-[400] text-[1.4rem] text-[rgba(248,231,243,1)]">ადმინისტრატორი</h3>
                {useMatch("/login&register/register") || useMatch("/login&register/login") ? <button className="p-[10px_19px] border-[0.55px] border-solid border-[rgba(118,229,252,1)] rounded-[6.27px] text-[1.1rem] font-[400] leading-[100%] text-[rgba(118,229,252,1)]">უკან</button> : <button className="p-[9.41px_18.81px] bg-gradient-to-b from-[#036073] to-[#05b4d9] font-[900] text-[1.1rem] leading-[100%] text-[#FFFFFF] border-[0.55px] border-solid border-[rgb(118,229,252)] rounded-[6.27px]">
                    გამოსვლა
                </button>}
            </div>
        </header>)
}
