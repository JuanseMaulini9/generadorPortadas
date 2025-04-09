import tagsData from "../../data/tags.json";
import { Select } from "./Select";
const tags = tagsData.es;

export const InputSelect = () => {
  return (
    <>{Object.entries(tags).map(([category, values]) => (
      <div key={category} className="flex flex-col my-2">
        <h2 className="font-bold text-lg mb-1">{category}</h2>
        <div className="flex flex-row flex-wrap gap-2">
          <Select values={values}></Select>
        </div>
      </div>
    ))}
    </>
  )
}