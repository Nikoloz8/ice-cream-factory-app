import { useLocation, useOutletContext } from 'react-router-dom'
import type { TFormFunctions } from '../../types'
import tailwind from '../../styles/tailwind'



export default function RegisterLoginForm() {

    const { register } = useOutletContext<TFormFunctions>()
    const { inputStyle, F1 } = tailwind()
    const location = useLocation()

    return (
        <form action="" onSubmit={(e) => e.preventDefault} className="flex flex-col gap-[20px]">
            {location.pathname.includes("/login_register/register") ?
                <div className="flex flex-col gap-[8px]">
                    <label htmlFor="name" className={`${F1} text-[rgba(0,58,70,1)]!`}>სახელი</label>
                    <input type="text" id="name" className={`${inputStyle}`} {...register("name")} />
                </div> : undefined
            }
            <div className="flex flex-col gap-[8px]">
                <label htmlFor="email" className={`${F1} text-[rgba(0,58,70,1)]!`}>ელ-ფოსტა</label>
                <input type="text" id="email" className={`${inputStyle}`} {...register("email")} />
            </div>
            <div className="flex flex-col gap-[8px]">
                <label htmlFor="password" className={`${F1} text-[rgba(0,58,70,1)]!`}>პაროლი</label>
                <input type="password" id="password" className={`${inputStyle}`} {...register("password")} />
            </div>
        </form>)
}
