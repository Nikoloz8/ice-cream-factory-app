export default function OrderManagment() {

    return (
        <div className="p-[20px] rounded-[6px] bg-[rgba(0,58,70,1)]">
            <h1 className="text-[rgba(255,255,255,1)] font-[500] text-[1.8rem] leading-[100%]">მომხმარებლების/როლების მართვა</h1>
            <table className="w-[767px] mt-[21px]">
                <thead className="mt-[21px] bg-[rgba(133,133,133,0.3)] p-[14px_21px_14px_21px]">
                    <tr>
                        <th className="p-[14px_0_14px_21px] text-[1.4rem] font-[300] leading-[100%] text-white text-left rounded-[6px_0_0_6px]!">შეკვეთის №</th>
                        <th className="text-[1.4rem] font-[300] leading-[100%] text-white text-left">პროდუქტი</th>
                        <th className="text-[1.4rem] font-[300] leading-[100%] text-white text-left">ვანილის ნაყინი</th>
                        <th className=" text-[1.4rem] font-[300] leading-[100%] text-white text-left">სტატუსი</th>
                        <th className="pr-[21px] text-[1.4rem] font-[300] leading-[100%] text-white rounded-[0_6px_6px_0]!">დეტალები</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b-[1px] border-solid border-[rgba(224,230,237,0.4)]">
                        <td className="p-[14px_0_14px_21px] text-[1.2rem] font-[400] leading-[100%] text-[rgba(255,255,255,1)]">#1201</td>
                        <td className="text-[1.2rem] font-[500] leading-[100%] text-[rgba(255,255,255,1)]">ვანილის ნაყინი</td>
                        <td className="text-[1.2rem] font-[400] leading-[100%] text-[rgba(255,255,255,0.8)]">
                            <div className="flex items-center gap-[6px]">
                                ნინო გოგია
                                <img src="/images/panelIcons/healthicons_communication.svg" alt="" />
                            </div>
                        </td>
                        <td className="text-[1.2rem] font-[500] leading-[100%] text-[rgba(4,255,128,1)]">
                            <div className="flex gap-[10px]">
                                <span className="w-[16px] h-[16px] rounded-[100%] block bg-[rgba(4,255,128,1)]"></span>
                                მიტანილია
                            </div>
                        </td>
                        <td>
                            <button className="flex items-center text-[1.2rem] font-[300] text-[rgba(255,255,255,1)] leading-[100%] gap-[3px] cursor-pointer p-[5px] rounded-[6px] border-[0.5px] border-solid border-[rgba(255,255,255,1)] ml-[32px]">
                                <img src="/images/panelIcons/heroicons_magnifying-glass-16-solid.svg" alt="" />
                                ნახვა
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-between w-[100%] mt-[40px]">
                <button className="p-[16px] rounded-[12px] bg-[rgba(0,21,25,1)] text-[1.2rem] text-[rgba(255,255,255,1)] cursor-pointer font-[900] leading-[100%] flex gap-[10px] items-center">
                    <img src="/images/panelIcons/Vector.svg" alt="" />
                    დამატება
                </button>
                
            </div>
        </div>
    )
}
