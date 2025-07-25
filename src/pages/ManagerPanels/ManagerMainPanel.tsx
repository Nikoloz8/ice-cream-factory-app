import InfoCard from "../../components/ManagmentLayout/InfoCard";
import IngredientsChart from "../../components/ManagmentLayout/IngredientsChart";
import tailwind from "../../styles/tailwind";

export default function ManagerMainPanel() {

    const { F2 } = tailwind()

    return (
        <div className="p-[20px] rounded-[6px] flex flex-col gap-[20px] bg-[rgba(0,58,70,1)]">
            <div className="flex gap-[15px]">
                <div className="flex flex-col gap-[50px]">
                    <h1 className={`${F2}`}>ინგრენდიენტები ჩარტი</h1>
                    <IngredientsChart />
                </div>
                <div className="flex flex-col gap-[25px]!">
                    <h1 className={`${F2}`}>მონაცემები</h1>
                    <div className="flex flex-col gap-[16px]">

                        <InfoCard title="საერთო გაყიდვები" value={<>₾12,500 - <span className="font-[400]! text-[rgba(255,255,255,0.7)]">მიმდინარე თვე</span></>} description="*+8% წინა თვესთან შედარებით" />

                        <InfoCard title="წარმოებული" value="15 000 ნაყინი" description="2% დაგვიანება" />

                        <InfoCard title="ინვენტარი" value="1 კრიტიკული დონე" description="სულ ინვენტარში: 523 ერთეული" />

                    </div>
                </div>
                <div className="h-[100%] ">
                    <img src="/images/panelIcons/Vector (2).svg" alt="" />
                </div>
            </div>
            <p className="text-[1.4rem] font-[400] text-[rgba(255,255,255,0.8)] leading-[100%]">*კრიტიკული - შაქარი</p>
        </div>
    )
}
