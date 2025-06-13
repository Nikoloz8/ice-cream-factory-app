import { useOutletContext } from "react-router-dom"
import type { TFormFunctions } from "../../types"

export default function Register() {

    const { register, watch, reset } = useOutletContext<TFormFunctions>()

    console.log(watch())

    return (
        <div className="flex flex-col justify-center w-[380px] gap-[40px] mt-[150px]">
            <h1 className="text-[5rem] leading-[100%] text-[rgba(4,174,210,1)] text-center font-[400]">
                რეგისტრაცია
            </h1>
            <h4 className="text-[1.4rem] mt-[8px] flex gap-[4px] font-[700] leading-[100%] text-[rgba(0,58,70,1)] justify-center">
                <span className="font-[300]">ან</span>
                <a className="hover:underline cursor-pointer">გაიარე ავტორიზაცია</a>
            </h4>
            <form action="" onSubmit={(e) => e.preventDefault} className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[8px]">
                    <label htmlFor="emailOrNumber" className="text-[1.4rem] font-[300] leading-[100%] text-[rgba(0,58,70,1)] ">ელ-ფოსტა/ტელეფონის ნომერი</label>
                    <input type="text" id="emailOrNumber" className="w-[100%] text-[1.2rem] font-[300] leading-[100%] text-[rgba(0,58,70,1)] p-[8px_16px_8px_16px] outline-none border-[1px] border-solid border-[rgba(4,174,210,1)] rounded-[5px]" {...register("emailOrPhone")} />
                </div>
                <div className="flex flex-col gap-[8px]">
                    <label htmlFor="password" className="text-[1.4rem] font-[300] leading-[100%] text-[rgba(0,58,70,1)] ">პაროლი</label>
                    <input type="password" id="password" className="w-[100%] text-[1.2rem] font-[300] leading-[100%] text-[rgba(0,58,70,1)] p-[8px_16px_8px_16px] outline-none border-[1px] border-solid border-[rgba(4,174,210,1)] rounded-[5px]" {...register("password")} />
                </div>

            </form>
        </div>
    )
}
