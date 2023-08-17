import Hero from "@/components/Hero";
import MyArea from "@/components/MyArea";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anasayfa - efemesudiyeli.dev ",
  description: "Efe Mesudiyeli kişisel portfolyo websitesi.",
};

export default function Home() {
  return (
    <main className="container flex flex-col gap-y-10 ">
      <Hero />
      <MyArea />
    </main>
  );
}
