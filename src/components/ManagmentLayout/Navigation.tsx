import { useLocation, useMatch, useNavigate } from 'react-router-dom'

export default function Navigation({ setShowAddIngredient }: { setShowAddIngredient: React.Dispatch<React.SetStateAction<boolean>> }) {


    const location = decodeURI(useLocation().pathname).split("/")
    const role = location[2]

    const neededNavButtons = () => {
        const navButtonsAdmin = ["მთავარი პანელი", "როლების მართვა", "სისტემის პარამეტრები", "ანგარიშგება & სტატისტიკა", "შეკვეთების მართვა", "ინგრედიენტების მართვა"]
        const navButtonsManager = ["მთავარი", "წარმოების მართვა", "ინვეტარის მართვა", "სტატუსების განახლება"]
        const navButtonsDistributor = ["მთავარი", "მიწოდების დავალებები", "რუკა"]
        const navButtonsSalesTeam = ["შეკვეთების მართვა"]

        return role === "administrator" ? navButtonsAdmin : role === "manager" ? navButtonsManager : role === "distributor" ? navButtonsDistributor : role === "sales team" ? navButtonsSalesTeam : undefined
    }

    const navigate = useNavigate()

    return (
        <nav className="w-[230px]">
            <div className="flex gap-[8px] mb-[12px]">
                <img className="w-[12px]" src="/images/panelIcons/Group21.svg" alt="" />
                <h5 className="text-[rgba(4,164,197,1)] font-[300] text-[1.4rem] leading-[100%]">დაფა</h5>
            </div>
            {neededNavButtons()?.map((e, i) => {
                return <button key={i} onClick={() => {
                    navigate(`/roles/${role}/${e}`)
                    setShowAddIngredient(false)
                }} className={`w-[100%] text-[1.4rem] font-[500] leading-[100%] text-[rgba(255,255,255,0.8)] bg-[rgba(4,174,210,1)] p-[8px_0px_8px_21px] outline-none cursor-pointer text-left border-b-[1px] border-solid border-[rgba(248,231,243,1)] ${useMatch(`/roles/${role}/${e}`) ? "text-[rgba(255,255,255,1)]! font-[700]!" : undefined} ${i === 0 ? "rounded-[8px_8px_0_0]" : undefined} ${i + 1 === neededNavButtons()?.length ? "rounded-[0_0_8px_8px]" : undefined}`}>
                    {e}
                </button>
            })}
        </nav>)
}
