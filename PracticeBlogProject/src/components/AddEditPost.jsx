import Input from "./Input";
import Select from "./Select";
import RTE from "./RTE";
import Button from "./Button";
import {useForm} from "react-hook-form";

function AddEditPost() {

    const {register, handleSubmit, watch, formState: { errors }, control, getValues, setValue} = useForm();
    return (<>
        <form>
            <Input label="Title" />
            <Input label="Slug" />
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")}/>
            <Select label="Status"/>
            <Input type="file" label="Article Image" />
            <Button type="submit">Submit</Button>
        </form>
    </>);
}

export default AddEditPost;