interface Props{
  gen: string
}

export const Tag = ({gen}: Props) => {
  return (
    <div className="bg-neutral-900 py-1 px-2 w-fit rounded-2xl">
      {gen}
    </div>
  );
};
