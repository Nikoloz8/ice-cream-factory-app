import type { TTextContent } from "../../types";

export default function TextContent({title, value} : TTextContent) {
    return (
        <div>
            <h1 className="text-[5rem] leading-[100%] text-[rgba(4,174,210,1)] text-center font-[400]">
                {title}
            </h1>
            <h4 className="text-[1.4rem] mt-[8px] flex gap-[4px] font-[700] leading-[100%] text-[rgba(0,58,70,1)] justify-center">
                <span className="font-[300]">ან</span>
                <a className="hover:underline cursor-pointer">{value}</a>
            </h4>
        </div>
    )
}
