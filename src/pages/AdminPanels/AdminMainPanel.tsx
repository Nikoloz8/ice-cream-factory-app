export default function AdminMainPanel() {

  return (
    <div className="p-[20px] rounded-[6px] bg-[rgba(0,58,70,1)]">
      <h1 className="text-[rgba(255,255,255,1)] font-[500] text-[1.8rem] leading-[100%]">მთავარი პანელი</h1>
      <div className="flex gap-[24px] mt-[48px]">
        <div className="flex gap-[24px] flex-col w-[318px]">
          <div className="flex flex-col gap-[16px]">
            <div className="p-[10px_17px_10px_10px] bg-[rgba(0,21,25,1)] flex flex-col gap-[8px] rounded-[6px]">
              <h2 className="text-[1.8rem] font-[300] leading-[100%] text-[rgba(255,255,255,1)] border-b-[1px] border-solid border-[rgba(4,174,210,1)] pb-[8px]">საერთო გაყიდვები</h2>
              <h3 className="text-[1.6rem] font-[300] leading-[100%] text-[rgba(255,255,255,0.7)]"><span className="font-[900] text-[#FFFFFF]">₾12,500 - </span>მიმდინარე თვე</h3>
              <h3 className="text-[1.2rem] font-[400] leading-[100%] text-[rgba(255,255,255,0.7)]">*+8% წინა თვესთან შედარებით</h3>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] w-[246px]">
            <div className="p-[10px_17px_10px_10px] bg-[rgba(0,21,25,1)] flex flex-col gap-[8px] rounded-[6px]">
              <h2 className="text-[1.8rem] font-[300] leading-[100%] text-[rgba(255,255,255,1)] border-b-[1px] border-solid border-[rgba(4,174,210,1)] pb-[8px]">წარმოებული</h2>
              <h3 className="text-[1.6rem] leading-[100%] font-[900] text-[#FFFFFF]">15 000 ნაყინი</h3>
              <h3 className="text-[1.2rem] font-[400] leading-[100%] text-[rgba(255,255,255,0.7)]">2% დაგვიანება</h3>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] w-[259px]">
            <div className="p-[10px_17px_10px_10px] bg-[rgba(0,21,25,1)] flex flex-col gap-[8px] rounded-[6px]">
              <h2 className="text-[1.8rem] font-[300] leading-[100%] text-[rgba(255,255,255,1)] border-b-[1px] border-solid border-[rgba(4,174,210,1)] pb-[8px]">მიწოდებული შეკვეთები </h2>
              <h3 className="text-[1.6rem] font-[300] leading-[100%] text-[rgba(255,255,255,0.7)]"><span className="font-[900] text-[#FFFFFF]">132 - </span>მიმდინარე თვე</h3>
              <h3 className="text-[1.2rem] font-[300] leading-[100%] text-[rgba(255,255,255,0.7)]"><span className="font-[900] text-[#FFFFFF]">118 - </span>წინა თვე</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] mt-[-24px]">
          <h3 className="text-[1.4rem] font-[400] leading-[100%] text-[rgba(255,255,255,1)]">
            ინგრედიენტების ჩარტი
          </h3>
          <div className="w-[422px] h-[288px] rounded-[6px] bg-[rgba(0,21,25,1)]"></div>
        </div>
      </div>
    </div>
  )
}
