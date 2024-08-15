import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { z } from "zod";
import MyFloatingInput from "../../my-ui/MyFloatingInput";
import { zodResolver } from "@hookform/resolvers/zod";
import MyDropdwonBox from "../../my-ui/MyDropdwonBox";


const types = ["Electronics", "Clothing", "Home and Kitchen", "Toys", "Beauty"]

const schema = z.object({
    product: z.string().min(4).max(20),
    cost: z.coerce.number().gte(10, 'Must be 18 and above'),
    date: z.coerce.date(),
    type: z.string()
}
)


const AddProduct = ({ onSubmit }) => {

    const form = useForm({
        resolver: zodResolver(schema)
    });

    const { register, control, handleSubmit, formState } = form;
    const { errors, isDirty, isValid } = formState;

    return (
        <>
            <h3>Add Product</h3>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <MyFloatingInput register={register} label='Product' errors={errors} />
                <MyFloatingInput register={register} type='number' label='cost' errors={errors} />
                <MyFloatingInput register={register} type='date' label='date' errors={errors} />
                <MyDropdwonBox name="type" options={types} register={register} />

                <div className="d-grid gap-2 mt-3">
                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        Add Product
                    </button>
                </div>
            </form>

            <DevTool control={control} />
        </>
    );
};

export default AddProduct;
