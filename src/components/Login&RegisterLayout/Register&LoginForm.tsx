import { useOutletContext } from 'react-router-dom'
import type { TFormFunctions } from '../../types'
import tailwind from '../../styles/tailwind'
import Button from './Button'



export default function RegisterLoginForm() {

    const { register, handleSubmit, errors } = useOutletContext<TFormFunctions>()
    const { inputStyle, F1 } = tailwind()

    const isRegister = location.pathname.includes("/login_register/register")

    return (
        <form action="" onSubmit={handleSubmit()} className="flex flex-col gap-[20px]">
            {isRegister ?
                <div className="flex flex-col gap-[8px]">
                    <div className='flex justify-between w-[100%]'>
                        <label htmlFor="name" className={`${F1} text-[rgba(0,58,70,1)]!`}>სახელი</label>
                        {errors.name ? <p className={`${F1} text-[rgba(0,58,70,1)]!`}>{errors.name.message}</p> : ""}
                    </div>
                    <input type="text" id="name" className={`${inputStyle}`} {...register("name", { required: "აუცილებელი ველი" })} />
                </div> : undefined
            }
            <div className="flex flex-col gap-[8px]">
                <div className='flex justify-between w-[100%]'>
                    <label htmlFor="email" className={`${F1} text-[rgba(0,58,70,1)]!`}>ელ-ფოსტა</label>
                    {errors.email ? <p className={`${F1} text-[rgba(0,58,70,1)]!`}>{errors.email.message}</p> : ""}
                </div>
                <input type="text" id="email" className={`${inputStyle}`} {...register("email", {
                    required: "აუცილებელი ველი",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "არასწორი ელ-ფოსტა"
                    }
                })} />
            </div>
            <div className="flex flex-col gap-[8px]">
                <div className='flex justify-between w-[100%]'>
                    <label htmlFor="password" className={`${F1} text-[rgba(0,58,70,1)]!`}>პაროლი</label>
                    {errors.password ? <p className={`${F1} text-[rgba(0,58,70,1)]!`}>{errors.password.message}</p> : ""}
                </div>
                <input type="password" id="password" className={`${inputStyle}`} {...register("password", {
                    required: "აუცილებელი ველი",
                    ...(isRegister && {
                        pattern: {
                            value: /^(?=.*\d)[A-Za-z\d]{8,}$/,
                            message: "მინ. 8 სიმბოლო და 1 ციფრი"
                        }
                    })
                })} />
            </div>
            <Button />
        </form>)
}
