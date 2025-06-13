import { useOutletContext } from 'react-router-dom'
import type { TFormFunctions } from '../../types'



export default function Form() {

    const { register } = useOutletContext<TFormFunctions>()

    return (
        <form action="" onSubmit={(e) => e.preventDefault} className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[8px]">
                <label htmlFor="emailOrNumber" className="text-[1.4rem] font-[300] leading-[100%] text-[rgba(0,58,70,1)] ">ელ-ფოსტა/ტელეფონის ნომერი</label>
                <input type="text" id="emailOrNumber" className="w-[100%] text-[1.2rem] font-[300] leading-[100%] text-[rgba(0,58,70,1)] p-[8px_16px_8px_16px] outline-none border-[1px] border-solid border-[rgba(4,174,210,1)] rounded-[5px]" {...register("emailOrPhone")} />
            </div>
            <div className="flex flex-col gap-[8px]">
                <label htmlFor="password" className="text-[1.4rem] font-[300] leading-[100%] text-[rgba(0,58,70,1)] ">პაროლი</label>
                <input type="password" id="password" className="w-[100%] text-[1.2rem] font-[300] leading-[100%] text-[rgba(0,58,70,1)] p-[8px_16px_8px_16px] outline-none border-[1px] border-solid border-[rgba(4,174,210,1)] rounded-[5px]" {...register("password")} />
            </div>
        </form>)
}
