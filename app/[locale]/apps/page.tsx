import Hero from "@/components/Hero";
import MyArea from "@/components/MyArea";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";

import type { Metadata } from "next";
import { SearchCode } from "../../../node_modules/lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Apps - efemesudiyeli.dev ",
    description: "Efe Mesudiyeli kişisel portfolyo websitesi.",
};

export default function Home() {
    const t = useTranslations("whoAmI");

    return (
        <main className="container grid grid-cols-3 gap-10 ">

            <div className="flex flex-col justify-between items-center h-44 py-5 px-7 border rounded-lg">
                <div>
                    <h3 className="text-primary font-extrabold text-2xl">
                        Spyquest - Find The Spy
                    </h3>
                </div>

                <div className="text-primary/60 text-sm font-light h-12 overflow-clip">
                    Dive into the exciting world of Spyquest, the ultimate social party game app.
                </div>

                <div className="w-full mt-4">
                    <Link
                        target="_blank"
                        rel="noreferrer"
                        href={"/apps/spyquest"}
                    >
                        <Button className="w-full flex gap-2">
                            <SearchCode size={16} /> {t("inspectButton")}
                        </Button>
                    </Link>
                </div>

            </div>
            <div className=" flex flex-col justify-between items-center h-44 py-5 px-7 border rounded-lg">
                <div>
                    <h3 className="text-primary font-extrabold text-2xl">
                        Coming Soon
                    </h3>
                </div>

                <div className="text-primary/60 text-sm font-light h-12 overflow-clip">
                    ...                </div>

                <div className="w-full mt-4">
                    <Link

                        target="_blank"
                        rel="noreferrer"
                        href={"/apps/spyquest"}
                    >
                        <Button className="w-full flex gap-2" disabled>
                            <SearchCode size={16} /> {t("inspectButton")}
                        </Button>
                    </Link>
                </div>

            </div>
            <div className="flex flex-col justify-between items-center h-44 py-5 px-7 border rounded-lg">
                <div>
                    <h3 className="text-primary font-extrabold text-2xl">
                        Coming Soon                    </h3>
                </div>

                <div className="text-primary/60 text-sm font-light h-12 overflow-clip">
                    ...                </div>

                <div className="w-full mt-4">
                    <Link
                        target="_blank"
                        rel="noreferrer"
                        href={"/apps/spyquest"}
                    >
                        <Button className="w-full flex gap-2" disabled>
                            <SearchCode size={16} /> {t("inspectButton")}
                        </Button>
                    </Link>
                </div>

            </div>

        </main>
    );
}
