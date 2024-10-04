import heroImage from "@/assets/fridge.png";
import Image from "next/image";
import { Alink } from "./a-link";
import { Section } from "./section";

export function Hero() {
  return (
    <Section>
      <div className="container mx-auto flex flex-col place-items-end items-center p-5 lg:grid lg:grid-cols-2">
        <div className="animate-animateShow2 flex flex-col gap-10">
          <h1 className="text-4xl font-extrabold tracking-wide lg:text-5xl xl:text-7xl">
            <span className="text-app-green"></span>
            Aproveite ao <span className="text-app-green">máximo </span>seus
            <span className="text-app-green"> ingredientes </span>e descubra
            <span className="text-app-green"> receitas deliciosas </span>
            em poucos cliques.
          </h1>
          <p className="text-sm text-gray-700 md:text-base dark:text-gray-400">
            descubra sugestões personalizadas que tornam a cozinha mais fácil e
            divertida. Planeje refeições com facilidade e aproveite ao máximo os
            ingredientes disponíveis, transformando cada refeição em uma
            experiência deliciosa!
          </p>
          <Alink className="w-full text-center md:max-w-60">
            Comece Agora!
          </Alink>
        </div>
        <div className="animate-animateShow3 hidden h-[440px] w-[440px] rounded-full lg:block 2xl:h-[600px] 2xl:w-[600px]">
          <Image
            src={heroImage}
            className="h-full w-full object-cover"
            alt="Imagem de uma geladeira com ingredientes"
          />
        </div>
      </div>
    </Section>
  );
}
