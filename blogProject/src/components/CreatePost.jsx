import Container from "./Container";
import Input from "./Input";
import RTE from "./RTE";
import { useForm } from "react-hook-form";
import Select from "./Select";
import { ErrorMessage } from "@hookform/error-message";
import Button from "./Button";

function CreatePost() {
    const { register, formState: { errors }, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
           
        },
    });

    const handlePost = (data) => {
        
    }
    
    return (<>
        <Container>
        <form onSubmit={handleSubmit(handlePost)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title",  { required: "This is required." })}
                />
                <ErrorMessage errors={errors} name="title" />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug",  { required: "This is required." })}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image",  { required: "This is required." })}
                />
               
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status")}
                />
                 <Button type="submit"  className="w-full">
                 Submit
                </Button>
            </div>
        </form>
        </Container>
    </>);
}

export default CreatePost;