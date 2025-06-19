import LoginAndRegisterForm from "../../components/Login&RegisterLayout/Register&LoginForm"
import TextContent from "../../components/Login&RegisterLayout/TextContent"

export default function Register() {

    return (
        <div className="flex flex-col justify-center w-[380px] gap-[40px] mt-[150px]">

            <TextContent title="რეგისტრაცია" value="გაიარე ავტორიზაცია" />

            <LoginAndRegisterForm />

        </div>
    )
}
