import InfoCard from "../../components/AdminLayout/InfoCard"

export default function Statistics() {

  const examplePopulars = ["Mango Tango", "Cookies & Cream", "Berry Mix", "Strawberry Sorbet"]

  return (
    <div className="p-[20px] rounded-[6px] bg-[rgba(0,58,70,1)]">
      <h1 className="text-[rgba(255,255,255,1)] font-[500] text-[1.8rem] leading-[100%]">ანგარიშება/სტატისტიკა</h1>
      <div className="mt-[40px] gap-[15px] flex flex-col">
        <div className="flex gap-[12px] h-[300px]">
          <div className="flex flex-col justify-between h-[100%] w-[320px]">

            <InfoCard title="საერთო გაყიდვები" value={<>₾12,500 - <span className="font-[400]! text-[rgba(255,255,255,0.7)]">მიმდინარე თვე</span></>} description="*+8% წინა თვესთან შედარებით" />

            <InfoCard title="საერთო მიწოდებები (თვიური)" value="320 მიწოდება" description='96% დროულად შესრულებული"' />

            <InfoCard title="ინვენტარი" value="5 პროდუქტი კრიტიკულ დონეზე" description='სულ ინვენტარში: 250 ერთეული' />

          </div>
          <div className="p-[18px] bg-[rgba(0,21,25,1)] rounded-[6px] h-[100%] w-[440px]">
            <h2 className="font-[500] text-[1.8rem] leading-[100%] text-[rgba(255,255,255,1)] text-center">გაყიდვების თვიური დინამიკა</h2>
          </div>
        </div>
        <div className="w-[100%] p-[10px_16px_17px_10px] bg-[rgba(0,21,25,1)] rounded-[6px] ">
          <h2 className="text-[1.8rem] inline font-[300] leading-[100%] text-[rgba(255,255,255,1)] border-b-[1px] border-solid border-[rgba(4,174,210,1)] pb-[8px]">პოპულარული პროდუქტები</h2>
          <ol className="w-[100%] flex justify-between mt-[30px]">
            {examplePopulars.map((e, i) => {
              return <li className="font-[900] list-decimal text-[1.75rem] leading-[100%] text-[rgba(255,255,255,1)] ml-[24px]" key={i}>
                {e}
              </li>
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}
