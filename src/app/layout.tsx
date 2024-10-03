import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "../context/theme-context";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RestoRante",
  description:
    "Encontre receitas baseadas nos ingredientes que você já tem, otimizando suas refeições com a ajuda de IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} min-h-screen bg-zinc-100 text-black dark:bg-app-bg dark:text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
