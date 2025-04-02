import { Input } from "./components/Input";
import { Output } from "./components/Output";

export default function Home() {
  return (
    <div className="flex justify-center gap-30 py-20 h-screen">
      <Input></Input>

      <Output></Output>
    </div>
  );
}
