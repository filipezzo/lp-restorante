import { Cards } from "@/components/cards";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="my-5 space-y-5 md:my-10">
        <Hero />
        <Cards />
      </main>
    </div>
  );
}
