import { UseFormRegister } from "react-hook-form";
import { FormData } from "./Form";

interface Props {
  values: string[];
  name: keyof FormData;
  register: UseFormRegister<FormData>;
  error?: string;
}
export const Select = ({values} : Props) => {
  return (
    <select name="" id="" className="bg-neutral-900 p-2 rounded-lg">
              {values.map((tag) => {
                return (
                  <option value={tag} key={tag} className="bg-neutral-900 ">
                    {tag}
                  </option>
                );
              })}
            </select>
  )
}