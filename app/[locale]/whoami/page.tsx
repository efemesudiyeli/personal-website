import HeroOnly from "@/components/HeroOnly";
import Projects from "@/components/Projects";
import SkillProgress from "@/components/SkillProgress";
import { useTranslations } from "next-intl";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - efemesudiyeli.dev ",
  description:
    "Efe Mesudiyeli kişisel portfolyo websitesi yeteneklerim hakkımda ve projelerim.",
};

export default function Whoami() {
  const t = useTranslations("whoAmI");

  return (
    <div className="container flex flex-col gap-y-10 my-auto">
      <HeroOnly />

      <div id="skills" className="">
        <h2 className="text-3xl font-extrabold">{t("mySkillsTitle")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20">
          <SkillProgress skillName="Swift" value={70} />
          <SkillProgress skillName="SwiftUI" value={80} />
          <SkillProgress skillName="UI/UX" value={50} />
          <SkillProgress skillName="Architecture" value={40} />
        </div>
      </div>

      <div>
        <h2 id="projects" className="text-3xl font-extrabold">
          {t("projectsTitle")}
        </h2>
        <div>
          <Projects inspectButtonTranslate={t("inspectButton")} />
        </div>
      </div>
    </div>
  );
}
