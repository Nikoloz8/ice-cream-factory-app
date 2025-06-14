export default function Header({ setShowRoleOptions }: { setShowRoleOptions: React.Dispatch<React.SetStateAction<boolean>> }) {

    const nav = ["ისტორია", "გაყიდვების წერტილები", "კონტაქტი"]

    return (
        <header className="flex items-center justify-center w-[100%] p-[16px_64px] bg-[rgba(0,21,25,1)] ">
            <div className="w-[1200px] flex justify-between">
                <div className="flex items-center gap-[12px]">
                    <img src="/images/landingIcons/OBJETCS.svg" alt="" />
                    <h1 className="text-[rgba(192,247,252,1)] font-[300] text-[2.1rem] leading-[100%]">გლასე</h1>
                </div>
                <nav className="flex items-center gap-[32px]">
                    <a href="#პროდუქცია" className="flex font-[400] text-[1.4rem] leading-[100%] text-[rgba(248,231,243,1)] items-center">
                        <img src="/images/landingIcons/lets-icons_shop.svg" alt="" />
                        პროდუქცია
                    </a>
                    {nav.map((e, i) => {
                        return <a href={`#${e}`} key={i} className="font-[400] text-[1.4rem] leading-[100%] text-[rgba(248,231,243,1)]">
                            {e}
                        </a>
                    })}
                    <button onClick={() => setShowRoleOptions(true)} className="p-[12px_24px] cursor-pointer bg-gradient-to-b from-[#036073] to-[#05b4d9] font-[900] text-[1.4rem] leading-[100%] text-[#FFFFFF] border-[0.7px] border-solid border-[rgb(118,229,252)] rounded-[27px]">
                        შესვლა
                    </button>
                </nav>
            </div>
        </header >)
}
