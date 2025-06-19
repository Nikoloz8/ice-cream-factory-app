import type { ReactNode, SetStateAction } from "react"

type TInfoCard = {
    title: string
    value: string | ReactNode
    description: string | ReactNode
}

type TRegisterOrLogin = {
    name: string
    email: number | string,
    password: string
}

type TFormFunctions = {
    register: UseFormRegister<TRegisterOrLogin>
    watch: UseFormWatch<TRegisterOrLogin>
    reset: UseFormReset<TRegisterOrLogin>
    handleSubmit: UseFormHandleSubmit<TRegisterOrLogin, TRegisterOrLogin>
    errors: FieldErrors<TRegisterOrLogin>
    clearErrors: UseFormClearErrors<TRegisterOrLogin>
}

type TTextContent = {
    title: string
    value: string
}

type TMissionCard = {
    title: string
    imgSrc: string
    value: string
}

type TIceCreamCard = {
    title: string
    value: string
    price: string
    imgSrc: string
}

type TAddIngredient = {
    setShowAddIngredient: React.Dispatch<React.SetStateAction<boolean>>
    showAddIngredient: boolean
}