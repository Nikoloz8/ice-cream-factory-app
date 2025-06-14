import tailwind from "../../styles/tailwind"

export default function UpdateStatusses() {

    const { F1, F2 } = tailwind()

    return (
        <div className="p-[20px] rounded-[6px] bg-[rgba(0,58,70,1)]">
            <h1 className={`${F2}`}>წარმოების სტატუსების განახლება</h1>
            <table className="w-[767px] mt-[21px]">
                <thead className="mt-[21px] bg-[rgba(133,133,133,0.3)] p-[14px_21px_14px_21px]">
                    <tr>
                        <th className={`p-[14px_0_14px_21px] ${F1} text-left rounded-[6px_0_0_6px]!`}>პარტია</th>
                        <th className={`text-center ${F1}`}>პროდუქტი</th>
                        <th className={`${F1} text-center`}>
                            სტატუსი
                        </th>
                        <th className={`pr-[21px] ${F1} text-center`}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b-[1px] border-solid border-[rgba(224,230,237,0.4)]">
                        <td className="p-[14px_0_14px_21px] text-[1.2rem] font-[400] leading-[100%] text-[rgba(255,255,255,1)]">#234</td>
                        <td className="text-center text-[1.4rem] font-[300] leading-[100%] text-[rgba(255,255,255,1)]">
                            ვანილის ნაყინიი
                        </td>
                        <td className={`text-center ${F1} text-[rgba(255,255,255,0.8)]!`}>
                            <div className="flex gap-[10px] ml-[100px] text-[rgba(4,255,128,1)]">
                                <span className="w-[16px] h-[16px] rounded-[100%] block bg-[rgba(4,255,128,1)]"></span>
                                წარმოებაშია
                            </div>
                        </td>
                        <td>
                            <button className={`flex items-center gap-[5px] text-center ${F1} cursor-pointer`}>
                                <img src="/images/panelIcons/Vector (3).svg" alt="" />
                                განახლება
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>)
}
