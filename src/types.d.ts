import type { ReactNode } from "react"

type TInfoCard = {
    title: string
    value: string | ReactNode
    description: string | ReactNode
}

type TRegisterOrLogin = {
    emailOrPhone: number | string,
    password: string
}

type TFormFunctions = {
    register: UseFormRegister<TRegisterOrLogin>
    watch: UseFormWatch<TRegisterOrLogin>
    reset: UseFormReset<TRegisterOrLogin>
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