import Input from "./Input";
import Select from "./Select";
import RTE from "./RTE";
import Button from "./Button";
import {useForm} from "react-hook-form";
import CustSelect from "./CustSelect";

function AddEditPost() {

    const {register, handleSubmit, watch, formState: { errors }, control, getValues, setValue} = useForm();
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      const handleAddEditForm = async (data) => {
        console.log(data);
        try {
            
        } catch (error) {
            
        }
      }
    return (<>
        <form onSubmit={handleSubmit(handleAddEditForm)}>
            <Input label="Title" {...register("title",{required : "This is required"})}/>
            <Input label="Slug" {...register("slug",{required : "This is required"})}/>
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")}/>
            <Select label="Status"/>
            <CustSelect name="custsel" options={options} control={control} defaultValue={getValues("custsel")}/>
            <Input type="file" label="Article Image" />
            <Button type="submit">Submit</Button>
        </form>
    </>);
}

export default AddEditPost;