"use client";

import { useState } from "react";

interface Props {
  gen: string;
}

export const Tag = ({ gen }: Props) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div
      className={`py-1 px-2.5 w-fit rounded-2xl hover:bg-neutral-300 hover:cursor-pointer hover:text-black ${
        selected ? "bg-green-400 text-black" : "bg-neutral-900"
      }`}
      onClick={() => setSelected(!selected)}
    >
      {gen}
    </div>
  );
};
