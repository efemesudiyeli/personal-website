import Hero from "@/components/Hero";
import MyArea from "@/components/MyArea";

export default function Home() {
  return (
    <main className="container flex flex-col gap-y-10 ">
      <Hero />
      <MyArea />
    </main>
  );
}
