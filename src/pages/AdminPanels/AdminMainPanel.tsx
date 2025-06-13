import DeliveredOrders from "../../components/AdminLayout/DeliveredOrders"
import TotalProduced from "../../components/AdminLayout/TotalProduced"
import TotalSales from "../../components/AdminLayout/TotalSales"

export default function AdminMainPanel() {

  return (
    <div className="p-[20px] rounded-[6px] bg-[rgba(0,58,70,1)]">
      <h1 className="text-[rgba(255,255,255,1)] font-[500] text-[1.8rem] leading-[100%]">მთავარი პანელი</h1>
      <div className="flex gap-[24px] mt-[48px]">
        <div className="flex gap-[16px] flex-col w-[318px]">

          <TotalSales />

          <div className="flex flex-col gap-[16px] w-[246px]">

            <TotalProduced />

          </div>
          <div className="flex flex-col gap-[16px] w-[259px]">

            <DeliveredOrders />

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
