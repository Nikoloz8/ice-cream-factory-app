import { Outlet } from "react-router-dom"
import Header from "../components/ManagmentLayout/Header"
import Navigation from "../components/ManagmentLayout/Navigation"
import AddIngredient from "../components/ManagmentLayout/AddIngredient"
import { useState } from "react"

export default function ManagmentLayout() {

    const [showAddIngredient, setShowAddIngredient] = useState(false)

    return (
        <div className="w-[100%] min-h-[100vh] h-[100%] bg-[rgba(248,231,243,1)] pb-[100px]">
            <Header />
            <div className="flex gap-[37px] justify-center relative mt-[95px]">
                <AddIngredient showAddIngredient={showAddIngredient} setShowAddIngredient={setShowAddIngredient}/>
                <Navigation  setShowAddIngredient={setShowAddIngredient}/>
                <div className="mt-[26px]">
                    <Outlet context={{setShowAddIngredient, showAddIngredient}}/>
                </div>
            </div>
        </div>
    )
}
