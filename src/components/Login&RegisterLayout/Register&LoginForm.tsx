import { useOutletContext } from 'react-router-dom'
import type { TFormFunctions } from '../../types'
import tailwind from '../../styles/tailwind'



export default function RegisterLoginForm() {

    const { register } = useOutletContext<TFormFunctions>()
    const { inputStyle, F1 } = tailwind()

    return (
        <form action="" onSubmit={(e) => e.preventDefault} className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[8px]">
                <label htmlFor="emailOrNumber" className={`${F1} text-[rgba(0,58,70,1)]!`}>ელ-ფოსტა/ტელეფონის ნომერი</label>
                <input type="text" id="emailOrNumber" className={`${inputStyle}`} {...register("emailOrPhone")} />
            </div>
            <div className="flex flex-col gap-[8px]">
                <label htmlFor="password" className={`${F1} text-[rgba(0,58,70,1)]!`}>პაროლი</label>
                <input type="password" id="password" className={`${inputStyle}`} {...register("password")} />
            </div>
        </form>)
}
