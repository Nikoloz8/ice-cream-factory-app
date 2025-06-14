export default function tailwind() {

    const F1 = "text-[1.4rem] font-[300] leading-[100%] text-white"
    const F2 = "text-[rgba(255,255,255,1)] font-[500] text-[1.8rem] leading-[100%]"
    const F3 = "text-[1.4rem] font-[500] leading-[100%] text-[rgba(255,255,255,0.7)]"
    const F4 = "font-[400] text-[1.4rem] leading-[36px] text-[rgba(199,199,199,1)] cursor-pointer"
    const panelSectionsDivStyle = "w-[25%] flex justify-center items-center"
    const customCheckInput = "w-[14px] h-[14px] border-[1px] border-solid border-[#FFFFFF] rounded-[4px] bg-center bg-no-repeat peer-checked:bg-[url('/images/panelIcons/ic_round-done.svg')]"
    const credentials = "font-[700] text-[1.4rem] flex gap-[8px] leading-[100%] text-[rgba(255,255,255,0.7)]"
    const labelStyle = "flex gap-[8px] cursor-pointer"
    const inputStyle = "w-[100%] text-[1.2rem] font-[300] leading-[100%] text-[rgba(0,58,70,1)] p-[8px_16px_8px_16px] outline-none border-[1px] border-solid border-[rgba(4,174,210,1)] rounded-[5px]"

    return { F1, F2, F3, panelSectionsDivStyle, customCheckInput, credentials, labelStyle, inputStyle, F4 }
}
