interface Props {
  values: string[]
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