"use client";

interface Props {
  placeholder: string;
  textArea?: boolean;
}

export const Text = ({ placeholder, textArea = false }: Props) => {
  
  const baseStyle = "bg-neutral-900 rounded-md p-2"

  return (
    <>
      {textArea ? (
        <textarea
          placeholder="Descripcion"
          className={baseStyle}
        ></textarea>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className={baseStyle}
        />
      )}
    </>
  );
};
