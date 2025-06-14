import tailwind from "../../styles/tailwind"

export default function IngredientsManagment() {

    const {F1, F2} = tailwind()

    return (
        <div className="p-[20px] rounded-[6px] bg-[rgba(0,58,70,1)]">
            <h1 className={`${F2}`}>ინგრედიენტების მართვა</h1>
            <table className="w-[767px] mt-[21px]">
                <thead className="mt-[21px] bg-[rgba(133,133,133,0.3)] p-[14px_21px_14px_21px]">
                    <tr>
                        <th className={`p-[14px_0_14px_21px] ${F1} text-left rounded-[6px_0_0_6px]!`}>ინგრედიენტი</th>
                        <th className={`text-center ${F1}`}>სტატუსი</th>
                        <th className={`text-center ${F1}`}>საკმარისობა</th>
                        <th className={`pr-[21px] ${F1} text-center`}>საკმარისობა</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b-[1px] border-solid border-[rgba(224,230,237,0.4)]">
                        <td className="p-[14px_0_14px_21px] text-[1.2rem] font-[400] leading-[100%] text-[rgba(255,255,255,1)]">რძე</td>
                        <td className="text-center">
                            <h3 className="text-[1.1rem] font-[300] leading-[100%] text-[rgba(4,255,129,1)] bg-[rgba(0,171,85,0.3)] rounded-[35px] inline p-[5px]">საკმარისია</h3>
                        </td>
                        <td className={`text-center ${F1} text-[rgba(255,255,255,0.8)]!`}>
                            4 დღე
                        </td>
                        <td className={`text-center ${F1}`}>
                            200ლ
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
        </div>)
}
