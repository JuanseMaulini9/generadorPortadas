import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "./Form";
import { Text } from "./Text";

interface Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const InputsText = ({ register, errors }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Text
        name="title"
        placeholder="Título"
        register={register}
        error={errors.title?.message}
      />
      <Text
        name="description"
        placeholder="Descripción"
        register={register}
        textArea
        error={errors.description?.message}
      />
      <Text
        name="author"
        placeholder="Autor"
        register={register}
        error={errors.author?.message}
      />
    </div>
  );
};