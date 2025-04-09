import { Text } from "./Text"


export const InputsText = () => {
  return (
    <>
      <Text placeholder="Titulo"></Text>
      <Text placeholder="Descripcion" textArea={true}></Text>
      <Text placeholder="Autor"></Text>
    </>
  )
}