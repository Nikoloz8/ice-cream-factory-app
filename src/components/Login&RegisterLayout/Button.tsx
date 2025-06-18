export default function Button({ value }: { value: string }) {
    
    

    return (
        <div className="flex justify-center w-[100%]">
            <button className="p-[12px_24px] font-[900] text-[1.4rem] leading-[100%] text-[rgba(255,255,255,1)] bg-[rgba(4,174,210,1)] cursor-pointer rounded-[8px]">
                {value}
            </button>
        </div>)
}
