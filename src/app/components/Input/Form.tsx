// Components
import { InputsText } from "./InputsText";
import { InputSelect } from "./InputsSelect";
import { Button } from "./Button";

// Forms
import { formSchema } from "@/app/schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod"
import {useForm} from "react-hook-form"

export type FormData = z.infer<typeof formSchema>

export const Form = () => {
  
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <InputsText register={register} errors ={errors}></InputsText>
      <InputSelect register={register} errors ={errors}></InputSelect>
      <Button></Button>
    </form>
      
    </>
  );
};
