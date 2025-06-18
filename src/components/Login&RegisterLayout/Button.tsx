import axios from "axios"
import { useOutletContext } from "react-router-dom"
import type { TFormFunctions } from "../../types"

export default function Button({ value }: { value: string }) {

    const { watch } = useOutletContext<TFormFunctions>()

    console.log(watch())

    const registerUser = async () => {
        try {
            const response = await axios.post("http://localhost:3001/api/v1/auth/signup", watch())
            console.log(response.data)
        }
        catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="flex justify-center w-[100%]">
            <button onClick={registerUser} className="p-[12px_24px] font-[900] text-[1.4rem] leading-[100%] text-[rgba(255,255,255,1)] bg-[rgba(4,174,210,1)] cursor-pointer rounded-[8px]">
                {value}
            </button>
        </div>)
}
