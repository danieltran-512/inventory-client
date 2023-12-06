import getParts from "@/utils/queries/getParts";
import Image from "next/image";

export default async function Home() {
  const data = await getParts();

  console.log("hello?", data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Test
    </main>
  );
}
