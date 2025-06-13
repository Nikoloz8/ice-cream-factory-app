import Button from "../../components/Login&RegisterLayout/Button";
import Form from "../../components/Login&RegisterLayout/Form";
import TextContent from "../../components/Login&RegisterLayout/TextContent";

export default function Login() {
    return (
        <div className="flex flex-col justify-center w-[380px] gap-[40px] mt-[150px]">
            
            <TextContent title="შესვლა" value="დარეგისტრირდი" />
            
            <Form />
            
            <Button value="შესვლა" />
        
        </div>
    )
}
