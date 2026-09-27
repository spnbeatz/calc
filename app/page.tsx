import { Calculator } from "@/components/Calculator";
import { CalculatorProvider } from "@/providers/CalculatorProvider";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>

    </div>
  );
}
