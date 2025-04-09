import { UseFormRegister } from "react-hook-form";
import { FormData } from "./Form";

interface Props {
  placeholder: string;
  textArea?: boolean;
  name: keyof FormData; 
  register: UseFormRegister<FormData>;
  error?: string;
}

export const Text = ({ placeholder, textArea = false, name, register, error }: Props) => {
  
  const baseStyle = "bg-neutral-900 rounded-md p-2"

  return (
    <>
      {textArea ? (
        <textarea
          {...register(name)}
          placeholder="Descripcion"
          className={baseStyle}
        ></textarea>
      ) : (
        <input
          {...register(name)}
          type="text"
          placeholder={placeholder}
          className={baseStyle}
        />
      )}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </>
  );
};
