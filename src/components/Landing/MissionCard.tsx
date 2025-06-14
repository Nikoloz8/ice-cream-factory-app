import type { TMissionCard } from "../../types";

export default function MissionCard({ title, imgSrc, value }: TMissionCard) {
    return (
        <div className="p-[30px] bg-[rgba(0,58,70,1)] flex flex-col gap-[24px] rounded-[24px] ">
            <h2 className="text-[2.4rem] text-[rgba(248,231,243,1)] leading-[100%] font-[900] text-center">{title}</h2>
            <img src={imgSrc} alt="" />
            <p className="text-[1.4rem] font-[400] text-left max-w-[380px] text-[rgba(198,196,208,1)] ">
                {value}
            </p>
        </div>)
}
