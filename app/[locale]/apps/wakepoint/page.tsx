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
            <h1 className="text-2xl"><b>WakePoint: Never Miss a Stop</b></h1>
            <p>WakePoint is a location-based alarm app that takes the worry out of missing your stop on public transportation and long journeys. It notifies you with a vibration or sound alert when you are close to your destination. So you can sleep comfortably or use other apps without missing your stop.
            </p>

            <h2 className="text-xl">WHO IS IT FOR?</h2>

            <ul className="list-inside list-disc">
                <li>For public transportation users: Worry-free travel in crowds and on tired mornings.
                </li>
                <li>For long commuters: Get to your destination without interrupted sleep.
                </li>
                <li>For commuters: Sleep safely on the bus, train or subway.
                </li>
                <li>For night travelers: Wake up safely even in the dark.
                </li>
                <li>For those who don&apos;t want to constantly check their stop: You don&apos;t always have to keep your eyes on the road.
                </li>
            </ul>

            <h2 className="text-xl">FEATURES</h2>

            <ul className="list-inside list-disc">
                <li>Location Based Alarm (GPS): Automatic alert when approaching a stop.
                </li>
                <li>Background Operation: Works even when the app is in the background.
                </li>
                <li>Battery Friendly Structure: Maximum efficiency with minimum battery consumption.
                </li>
                <li>Smart Alerts: Vibration, sound and sensitivity settings are yours.
                </li>
                <li>Favorite Route Saving: Your favorite routes are always ready.
                </li>
                <li>Easy to Use: Simple, intuitive and fast interface.
                </li>
                <li>Privacy Sensitive: Location data is stored only on the device.
                </li>
            </ul>

            With WakePoint, your journeys are more comfortable, safe and stress-free. No more worrying about missing your stop!
            Download now and start your smart travel experience.
            <div className="flex gap-x-5">
                <Link className="" href="/apps/wakepoint/privacy">
                    <Button variant={"secondary"} className="gap-x-2 ">Privacy Policy</Button>
                </Link>
                <Link target="_blank" className="" href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
                    <Button variant={"secondary"} className="gap-x-2 ">Terms of Use</Button>
                </Link>

                <Link className="" href="https://apps.apple.com/tr/app/spyquest-find-the-spy/id6572294458">
                    <Button className="gap-x-2">Try WakePoint: Never Miss a Stop</Button>
                </Link>
            </div>
        </main>
    );
}
