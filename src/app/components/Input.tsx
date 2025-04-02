import { Tag } from "./Tag";

const tags = {
  genres: [
    "Fantasía",
    "Ciencia ficción",
    "Terror",
    "Romance",
    "Drama",
    "Comedia",
    "Misterio",
    "Aventura",
    "Thriller",
    "Histórico",
  ],
  target: ["Infantil", "Juvenil", "Adulto", "Familiar"],
  style: ["Minimalista", "Realista", "Ilustrado", "Cómic", "Abstracto"],
  ambientation: [
    "Futurista",
    "Medieval",
    "Urbana",
    "Post-apocalíptica",
    "Espacial",
  ],
};

export const Input = () => {
  return (
    <div className="border-[1px] rounded-md w-lg p-2 flex flex-col gap-2">
      <h2 className="font-bold text-2xl">Input</h2>
      <textarea
        placeholder="Descripcion"
        className="bg-neutral-900 rounded-md resize-none h-60 p-2 "
      ></textarea>
      <h2 className="font-bold text-2xl">Tags</h2>
      {
        Object.entries(tags).map(([category, values]) => (
          <div key={category} className="flex flex-col my-2">
            <h2 className="font-bold text-lg mb-1">{category}</h2>
            <div className="flex flex-row flex-wrap gap-2">
              {values.map(tag => {
              return <Tag key={tag} gen={tag}></Tag>
            })}
            </div>
            
          </div>
        ))
      }
    </div>
  );
};
