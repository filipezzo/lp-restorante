import heroImage from "@/assets/fridge.png";
import { Alink } from "@/components/a-link";
import Image from "next/image";
import { Header } from "../components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="my-5 md:my-10">
        <section className="w-full">
          <div className="container mx-auto flex flex-col place-items-end items-center p-5 lg:grid lg:grid-cols-2">
            <div className="flex flex-col gap-10">
              <h1 className="text-4xl font-extrabold tracking-wide lg:text-5xl xl:text-7xl">
                <span className="text-app-green"></span>
                Aproveite ao <span className="text-app-green">máximo </span>seus
                <span className="text-app-green"> ingredientes </span>e descubra
                <span className="text-app-green"> receitas deliciosas </span>
                em poucos cliques.
              </h1>
              <p className="text-sm text-gray-700 md:text-base dark:text-gray-400">
                descubra sugestões personalizadas que tornam a cozinha mais
                fácil e divertida. Planeje refeições com facilidade e aproveite
                ao máximo os ingredientes disponíveis, transformando cada
                refeição em uma experiência deliciosa!
              </p>
              <Alink className="w-full text-center md:max-w-60">
                Comece Agora!
              </Alink>
            </div>
            <div className="hidden h-[440px] w-[440px] rounded-full border border-emerald-700 lg:block 2xl:h-[600px] 2xl:w-[600px] dark:border-app-green">
              <Image
                src={heroImage}
                className="h-full w-full object-cover"
                alt="Imagem de uma geladeira com ingredientes"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
