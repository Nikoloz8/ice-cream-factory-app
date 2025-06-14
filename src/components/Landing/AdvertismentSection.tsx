export default function AdvertismentSection({ setShowRoleOptions }: { setShowRoleOptions: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <section className="flex gap-[20px] mt-[60px] items-center">
            <div className="w-[560px] flex flex-col gap-[32px]">
                <h1 className="text-[4rem] font-[300] leading-[100%] text-[rgba(0,21,25,1)]">
                    <span className="text-[rgba(4,174,210,1)] font-[700]">ნამდვილი</span> სიამოვნება ყველა <span className="text-[rgba(209,0,157,1)] font-[700]">გემოში!</span>
                </h1>
                <div className="flex flex-col gap-[16px] w-[420px] items-start">
                    <p className="text-[1.6rem] font-[400] text-[rgba(0,31,37,1)] leading-[100%]">ჩვენ ვქმნით ნაყინს, რომელიც არა მხოლოდ სიამოვნებას გაძლევს, არამედ თბილ ისტორიასაც მოგიყვება — ბუნებრივი ინგრედიენტებით და სიყვარულით შექმნილი.</p>
                    <button onClick={() => setShowRoleOptions(true)} className="p-[18.5px_26px] border-[1px] border-solid border-[rgba(4,174,210,1)] font-[900] text-[1.6rem] leading-[100%] rounded-[8px] cursor-pointer text-[rgba(4,174,210,1)]">შესვლა სისტემაში</button>
                </div>
            </div>
            <img src="/images/landingIcons/Group 40747.svg" alt="" />
        </section>)
}
