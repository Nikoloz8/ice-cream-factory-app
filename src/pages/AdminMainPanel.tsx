import Header from "../components/AdminPanel/Header"
import Navigation from "../components/AdminPanel/Navigation"
import Statistics from "../components/AdminPanel/Statistics"

export default function AdminMainPanel() {

  return (
    <div>
      <Header />
      <div className="flex gap-[37px] justify-center mt-[95px]">

        <Navigation />

        <Statistics />

      </div>
    </div>
  )
}
