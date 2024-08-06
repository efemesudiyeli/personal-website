import HeroOnly from "@/components/HeroOnly";
import MyArea from "@/components/MyArea";
import Link from "next-intl/link";
import { Button } from "@/components/ui/button"

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Anasayfa - efemesudiyeli.dev ",
    description: "Efe Mesudiyeli kişisel portfolyo websitesi.",
};

export default function Home() {
    return (
        <main className="container flex flex-col gap-y-10">
            <h1 className="text-2xl"><b>Spyquest – Find the Spy!</b></h1>
            <p>Dive into the exciting world of Spyquest, the ultimate social game that guarantees endless fun with family and friends. Spyquest offers a fresh, engaging experience with every game, thanks to its variety of locations and easy setup.
            </p>

            <h2 className="text-xl">Features:</h2>

            <ul className="list-inside list-disc">
                <li>Dynamic Gameplay: Enjoy a unique experience with each round thanks to a variety of randomly assigned locations and roles.
                </li>
                <li>Easy to Play: Quick setup and simple rules make it easy for players of all ages to join in and start the fun.
                </li>
                <li>Family-Friendly Fun: Perfect for gatherings and game nights, providing hours of entertainment for everyone.
                </li>
                <li>Intuitive Design: Simple and clean interface makes it easy to dive right into the action.
                </li>
            </ul>

            Gather your loved ones and uncover the spy, or guess the location as spy in Spyquest!
            <div className="flex gap-x-5">
                <Link className="" href="/apps/spyquest/privacy">
                    <Button variant={"secondary"} className="gap-x-2 ">Privacy Policy</Button>
                </Link>

                <Link className="" href="https://apps.apple.com/tr/app/spyquest-find-the-spy/id6572294458">
                    <Button className="gap-x-2">Try Spyquest</Button>
                </Link>
            </div>
        </main>
    );
}
