import { ChefHat } from "lucide-react";
import { Alink } from "./a-link";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
  return (
    <header className="w-full">
      <div className="container mx-auto flex items-center justify-between p-5">
        <a className="flex items-center gap-2" href="#">
          <ChefHat className="hidden size-9 md:block" />
          <h2 className="text-lg font-semibold md:text-2xl">
            Resto<span className="text-app-green">Rante</span>
          </h2>
        </a>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <Alink href="#" variant>
            Entrar
          </Alink>
          <Alink href="#">Cadastrar</Alink>
        </div>
      </div>
    </header>
  );
}