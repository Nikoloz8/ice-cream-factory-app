import Form from "../../components/Login&RegisterLayout/Form"
import TextContent from "../../components/Login&RegisterLayout/TextContent"
import Button from "../../components/Login&RegisterLayout/Button"

export default function Register() {

    return (
        <div className="flex flex-col justify-center w-[380px] gap-[40px] mt-[150px]">

            <TextContent title="რეგისტრაცია" value="გაიარე ავტორიზაცია" />

            <Form />

            <Button value="რეგისტრაცია"/>

        </div>
    )
}
