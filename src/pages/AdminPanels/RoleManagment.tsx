import tailwind from "../../styles/tailwind"

export default function RoleManagment() {

    const roleManagmentSections = ["სახელი", "როლი", "კონტაქტი", "სტატუსი"]

    const {F1, F2, panelSectionsDivStyle} = tailwind()

    return (
        <div className="p-[20px] rounded-[6px] bg-[rgba(0,58,70,1)]">
            <h1 className={`${F2}`}>მომხმარებლების/როლების მართვა</h1>
            <div className="w-[767px] mt-[21px] rounded-[6px] bg-[rgba(133,133,133,0.3)] p-[14px_0_14px_0] flex justify-between">
                {roleManagmentSections.map((e, i) => {
                    return <div className={`${panelSectionsDivStyle}`}>
                        <h3 key={i} className="text-[1.4rem] font-[300] leading-[100%] text-[rgba(255,255,255,1)] ">{e}</h3>
                    </div>
                })}
            </div>
            <div className="w-[100%] flex flex-col">
                <div className="w-[100%] flex justify-between items-center border-b-[1px] border-solid border-[rgba(224,230,237,0.4)] p-[14px_0_14px_0]">
                    <div className={`${panelSectionsDivStyle}`}>
                        <h3 className={`${F1} p-[8px_17px_8px_18px] border-[1px] border-solid border-[rgba(255,255,255,1)] rounded-[6px]`}>გიორგი</h3>
                    </div>
                    <div className={`${panelSectionsDivStyle}`}>
                        <h3 className={`${F1}`}>
                            მენეჯერი
                        </h3>
                    </div>
                    <div className={`${panelSectionsDivStyle}`}>
                        <div className="flex gap-[6px] items-center">
                            <img className="w-[18px] mb-[3px]" src="/images/panelIcons/calling.svg" alt="" />
                            <img className="w-[14px]" src="/images/panelIcons/g2444.svg" alt="" />
                        </div>
                    </div>
                    <div className={`${panelSectionsDivStyle}`}>
                        <h3 className={`flex gap-[4px] ${F1}`}>
                            <span className="w-[16px] h-[16px] rounded-[100%] block bg-[rgba(4,255,128,1)]"></span>
                            აქტიური
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
