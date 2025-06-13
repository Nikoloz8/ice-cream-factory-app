export default function ProductionManager() {
    return (
        <div className="p-[20px] rounded-[6px] bg-[rgba(0,58,70,1)]">
            <h1 className="text-[rgba(255,255,255,1)] font-[500] text-[1.8rem] leading-[100%]">წარმოების მართვა</h1>
            <table className="w-[767px] mt-[21px]">
                <thead className="mt-[21px] bg-[rgba(133,133,133,0.3)] p-[14px_21px_14px_21px]">
                    <tr>
                        <th className="p-[14px_0_14px_21px] text-[1.4rem] font-[300] leading-[100%] text-white text-left rounded-[6px_0_0_6px]!">წარმოების ეტაპი</th>
                        <th className="text-[1.4rem] font-[300] leading-[100%] text-center text-white">სტატუსი</th>
                        <th className="text-[1.4rem] text-center font-[300] leading-[100%] text-white">
                            <div className="flex flex-col">
                                <span>შესრულებულია</span>
                                <span>ერთეული</span>
                            </div>
                        </th>
                        <th className="pr-[21px] text-[1.4rem] font-[300] leading-[100%] text-white text-center">შენიშვნა</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b-[1px] border-solid border-[rgba(224,230,237,0.4)]">
                        <td className="p-[14px_0_14px_21px] text-[1.2rem] font-[400] leading-[100%] text-[rgba(255,255,255,1)]">ინგრედიენტების მომზადება</td>
                        <td className="text-center">
                            <h3 className="text-[1.1rem] font-[300] leading-[100%] text-[rgba(4,255,129,1)] bg-[rgba(0,171,85,0.3)] rounded-[35px] inline p-[5px]">დასრულდა</h3>
                        </td>
                        <td className="text-[1.4rem] text-center font-[300] leading-[100%] text-[rgba(255,255,255,0.8)]">
                            1200
                        </td>
                        <td>
                            <button className="p-[4px_12px] rounded-[6px] cursor-pointer border-[0.5px] border-solid border-[rgba(255,255,255, 1)] text-[1.4rem] font-[300] leading-[100%] text-[#FFFFFF] ml-[20px]">დეტალები</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>)
}
