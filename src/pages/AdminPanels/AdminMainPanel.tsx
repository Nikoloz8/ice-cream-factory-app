import InfoCard from "../../components/AdminLayout/InfoCard"


export default function AdminMainPanel() {

  return (
    <div className="p-[20px] rounded-[6px] bg-[rgba(0,58,70,1)]">
      <h1 className="text-[rgba(255,255,255,1)] font-[500] text-[1.8rem] leading-[100%]">მთავარი პანელი</h1>
      <div className="flex gap-[24px] mt-[48px]">
        <div className="flex gap-[16px] flex-col w-[318px]">

          <InfoCard title="საერთო გაყიდვები" value={<>₾12,500 - <span className="font-[400]! text-[rgba(255,255,255,0.7)]">მიმდინარე თვე</span></>} description="*+8% წინა თვესთან შედარებით" />

          <div className="flex flex-col gap-[16px] w-[246px]">

            <InfoCard title="წარმოებული" value="15 000 ნაყინი" description="2% დაგვიანება" />

          </div>
          <div className="flex flex-col gap-[16px] w-[259px]">

            <InfoCard title="მიწოდებული შეკვეთები" value={<>132 - <span className="font-[400]! text-[rgba(255,255,255,0.7)]">მიმდინარე თვე</span></>} description={<><span className="font-[900]! text-[rgba(255,255,255,1)]">118 -</span> წინა თვე</>} />

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
