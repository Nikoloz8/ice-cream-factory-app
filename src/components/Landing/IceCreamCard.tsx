import type { TIceCreamCard } from "../../types";

export default function IceCreamCard({ title, value, price, imgSrc }: TIceCreamCard) {
    return (
        <div className="flex flex-col rounded-[18px_18px_16px_16px] pb-[14px] bg-[rgba(0,58,70,1)]">
            <img src={imgSrc} className="rounded-[16px_16px_0_0]" alt="" />
            <div className="mt-[14px] items-center flex flex-col gap-[4px]">
                <h4 className="text-[2.4rem] font-[700] leading-[100%] text-[rgba(255,255,255,1)] text-center">{title}</h4>
                <p className="font-[300] text-[1.2rem] leading-[100%] text-[rgba(255,255,255,1)] text-center max-w-[218px]">{value}</p>
                <h4 className="text-center text-[rgba(211,14,162,1)] font-[700] leading-[100%] text-[2.4rem] ">{price}</h4>
            </div>
        </div>)
}
