import Input from "./Input";
import Select from "./Select";
import RTE from "./RTE";
import Button from "./Button";
import { useForm } from "react-hook-form";
import CustSelect from "./CustSelect";
import Container from "./Container";
import { useEffect } from "react";

function AddEditPost() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    getValues,
    setValue,
  } = useForm();
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const handleAddEditForm = async (data) => {
    // console.log(data);
    try {
      const file = data.image[0]
    } catch (error) {}
  };

  const slugTransform = (val) => {
    return val
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z\d\s]+/g, "-")
      .replace(/\s/g, "-");
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value[name]), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue]);

  return (
    <>
      <form
        onSubmit={handleSubmit(handleAddEditForm)}
        className="flex flex-wrap"
      >
        <div className="w-2/3 px-2">
          <Input
            label="Title"
            className="mb-4"
            {...register("title", { required: "This is required" })}
          />
          <Input
            label="Slug"
            className="mb-4"
            {...register("slug", { required: "This is required" })}
          />
          <RTE
            label="Content :"
            name="content"
            control={control}
            className="mb-4"
            defaultValue={getValues("content")}
          />
        </div>

        <div className="w-1/3 px-2">
          <Select
            label="Status"
            className="mb-4"
            options={["active", "inactive"]}
            {...register("status")}
          />
          <Input
            type="file"
            label="Article Image"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image")}
          />

          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
}

export default AddEditPost;
