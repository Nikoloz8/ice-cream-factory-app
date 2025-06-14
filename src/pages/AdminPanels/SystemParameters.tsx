import tailwind from "../../styles/tailwind"

export default function SystemParameters() {

    const { F2, F3, customCheckInput, credentials, labelStyle } = tailwind()

    return (
        <div className="p-[20px] rounded-[6px] bg-[rgba(0,58,70,1)]">
            <h1 className={`${F2}`}>
                პარამეტრებები/კონფიგურაცია
            </h1>
            <div className="flex items-center mt-[50px] gap-[90px] ml-[31px]">
                <div className="flex flex-col gap-[12px]">
                    <label htmlFor="messages" className={`${labelStyle}`}>
                        <h4 className={`${F3}`}>სისტემური შეტყობინებები</h4>
                        <input type="checkbox" className="peer hidden" id="messages" />
                        <div className={`${customCheckInput}`}>
                        </div>
                    </label>
                    <label htmlFor="warnings" className={`${labelStyle}`}>
                        <h4 className={`${F3}`}>შეკვეთების სტატუსის გაფრთხილებები</h4>
                        <input type="checkbox" className="peer hidden" id="warnings" />
                        <div className={`${customCheckInput}`}>
                        </div>
                    </label>
                    <label htmlFor="updates" className={`${labelStyle}`}>
                        <h4 className={`${F3}`}>ელ.ფოსტის განახლებები</h4>
                        <input type="checkbox" className="peer hidden" id="updates" />
                        <div className={`${customCheckInput}`}>
                        </div>
                    </label>
                </div>
                <div className="flex gap-[12px] flex-col">
                    <h3 className={`${credentials}`}>ელ. ფოსტა: <span className="font-[400]">administrator@icecream.ge</span></h3>
                    <h3 className={`${credentials}`}>პაროლი: <span className="font-[400] mt-[3px] block">************</span></h3>
                </div>
            </div>
            <div className="w-[772px] p-[15px_20px_11px_20px] mt-[40px] bg-[rgba(0,21,25,1)] rounded-[6px]">
                <h2 className="text-[1.8rem] font-[300] leading-[100%] text-[rgba(255,255,255,1)] border-b-[1px] border-solid border-[rgba(4,174,210,1)] pb-[8px] inline">პლატფორმა</h2>
                <div className="flex flex-col gap-[12px] mt-[14px]">
                    <h4 className={`mt-[14px] ${F3} text-[rgba(255,255,255,1)]!`}>ენა <span className="text-[rgba(255,255,255,0.7)]">- ქართული</span></h4>
                    <h4 className={`${F3} text-[rgba(255,255,255,1)]!`}>ვერსია <span className="text-[rgba(255,255,255,0.7)]">- 2.11</span></h4>
                    <h4 className={`${F3} text-[rgba(255,255,255,1)]!`}>განახლებები - <span className="font-[300]">12.05.2025</span></h4>
                </div>
            </div>
        </div >
    )
}
