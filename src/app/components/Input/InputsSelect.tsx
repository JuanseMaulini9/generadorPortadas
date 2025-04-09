import tagsData from "../../data/tags.json";
import { Select } from "./Select";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "./Form";

const tags = tagsData.es;

interface Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const InputSelect = ({ register, errors }: Props) => {
  return (
    <>
      {Object.entries(tags.categories).map(([key, categoryName]) => (
        <div key={key} className="flex flex-col my-2">
          <h2 className="font-bold text-lg mb-1">{categoryName}</h2>
          <div className="flex flex-row flex-wrap gap-2">
            <Select
              name={key as keyof FormData}
              values={Object.values(tags[key as keyof typeof tags])}
              register={register}
              error={errors[key as keyof FormData]?.message as string | undefined}
            />
          </div>
        </div>
      ))}
    </>
  );
};