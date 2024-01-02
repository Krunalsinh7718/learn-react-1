import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Input from "./Input";
import Button from "./Button";
import service from "../appwrite/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";

function SignupForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const  handleSignup = async (data) => {
        const createUser = await service.createAccount(data);
        console.log("signup createUser :",data);

       if(createUser){
            const currentUser = await service.getCurrentUser();
            console.log("sign up current user", currentUser);

            if(createUser){
                dispatch(login(currentUser))
            }
       }


    }



    return (
        <>
            <form onSubmit={handleSubmit(handleSignup)}>
                <Input
                    label="Name"
                    {...register("name", { required: "This is required", maxLength: { value: 20, message: "Maximum length of name is 20." } })}
                />
                <div className="text-red-600">
                    <ErrorMessage errors={errors} name="name" />
                </div>
                <Input
                    label="Email"
                    type="email"
                    {...register("email", { required: "This is required", maxLength: { value: 20, message: "Maximum length of name is 30." } })}
                />
                <div className="text-red-600">
                    <ErrorMessage errors={errors} name="email" />
                </div>
                <Input
                    label="Password"
                    {...register("password", { required: "This is required", minLength: { value: 8, message: "Minimum length of password is 8." } })}
                />
                <div className="text-red-600">
                    <ErrorMessage errors={errors} name="password" />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </>
    );
}

export default SignupForm;