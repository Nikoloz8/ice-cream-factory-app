import { useForm } from "react-hook-form"
import tailwind from "../../styles/tailwind"
import type { TAddIngredient } from "../../types"

export default function AddIngredient({ setShowAddIngredient, showAddIngredient }: TAddIngredient) {

    const { F2, F1, inputStyle2 } = tailwind()

    const { register, watch } = useForm({
        defaultValues: {
            ingredientName: "",
            count: "",
            sufficiency: "",
            note: ""
        }
    })

    console.log(watch())

    return (
        <div className={`absolute p-[20px] bg-[rgba(0,58,70,1)] top-[-700px] ${showAddIngredient ? "top-[-60px]!" : ""} shadow-[0_0_20px_15px_rgba(0,0,0,0.3)] transition-all duration-1000 rounded-[12px] flex flex-col`}>
            <h3 className={`${F2} text-[rgba(248,231,243,1)]`}>ინგრედიენტის დამატება</h3>
            <form action="" onSubmit={(e) => e.preventDefault} className="flex flex-col gap-[10px]">
                <div className="flex flex-col gap-[6px] mt-[24px]">
                    <label htmlFor="ingredientName" className={`${F1} text-[rgba(248,231,243,1)]`}>ინგრედიენტის სახელი:</label>
                    <input type="text" id="ingredientName" className={`${inputStyle2}`} placeholder="მაგ: რძე" {...register("ingredientName")} />
                </div>
                <div className="flex flex-col gap-[6px]">
                    <label htmlFor="count" className={`${F1} text-[rgba(248,231,243,1)]`}>რაოდენობა:</label>
                    <input type="text" id="count" className={`${inputStyle2}`} placeholder="მაგ: 100 ლიტრი" {...register("count")} />
                </div>
                <div className="flex flex-col gap-[6px]">
                    <label htmlFor="sufficiency" className={`${F1} text-[rgba(248,231,243,1)]`}>პროგნოზირებული საკმარისობა:</label>
                    <input type="text" id="sufficiency" className={`${inputStyle2}`} placeholder="მაგ: 5 დღე" {...register("sufficiency")} />
                </div>
                <div className="flex flex-col gap-[6px]">
                    <label htmlFor="note" className={`${F1} text-[rgba(248,231,243,1)]`}>შენიშვნა</label>
                    <textarea id="note" className={`${inputStyle2} p-[11px_14px]! resize-none h-[96px]`} placeholder="მაგ: სწრაფად მოხმარებადი პროდუქტი" {...register("note")} />
                </div>
                <div className="flex justify-center mt-[24px] gap-[13px]">
                    <button type="button" className={`flex items-center gap-[6px] cursor-pointer bg-[rgba(0,21,25,1)] p-[10px] ${F1} font-[900]! rounded-[6px]`}>
                        <img src="/images/panelIcons/material-symbols_done-rounded.svg" alt="" />
                        დამატება
                    </button>
                    <button type="button" onClick={() => setShowAddIngredient(false)} className={`flex items-center gap-[6px] 
                        border-[1px] border-solid border-[rgba(255,255,255,0.8)] cursor-pointer bg-transparent p-[10px] ${F1} font-[900]! rounded-[6px]`}>
                        <img src="/images/panelIcons/Group 40709.svg" alt="" />
                        გაუქმება
                    </button>
                </div>
            </form>
        </div>)
}
