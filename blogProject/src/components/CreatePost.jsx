import Container from "./Container";
import Input from "./Input";
import RTE from "./RTE";
import { useForm } from "react-hook-form";
import Select from "./Select";

function CreatePost() {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
           
        },
    });
    
    return (<>
        <Container>
        <form onSubmit={handleSubmit()} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                  
                />
               
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    
                />
                <button type="submit"  className="w-full">
                    Submit
                </button>
            </div>
        </form>
        </Container>
    </>);
}

export default CreatePost;