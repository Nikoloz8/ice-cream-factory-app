import type { TInfoCard } from "../../types";

export default function InfoCard({ title, value, description }: TInfoCard) {
    return (

        <div className="p-[10px_17px_10px_10px] w-[100%] bg-[rgba(0,21,25,1)] flex flex-col gap-[8px] rounded-[6px]">
            <h2 className="text-[1.8rem] font-[300] leading-[100%] text-[rgba(255,255,255,1)] border-b-[1px] border-solid border-[rgba(4,174,210,1)] pb-[8px]">{title}</h2>
            <h3 className="text-[1.6rem] font-[900] text-[#FFFFFF] leading-[100%]">{value}</h3>
            <h3 className="text-[1.2rem] font-[400] leading-[100%] text-[rgba(255,255,255,0.7)]">{description}</h3>
        </div>)
}
