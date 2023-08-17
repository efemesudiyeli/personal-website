import HeroOnly from "@/components/HeroOnly";
import Projects from "@/components/Projects";
import SkillProgress from "@/components/SkillProgress";

export default function Whoami() {
  return (
    <div className="container flex flex-col gap-y-6 my-auto">
      <HeroOnly />

      <div id="skills">
        <h2 className="text-3xl font-extrabold">MY SKILLS</h2>

        <div className="grid grid-cols-2 gap-4">
          <SkillProgress skillName="Javascript & Typescript" value={80} />
          <SkillProgress skillName="React & NextJS" value={70} />
          <SkillProgress skillName="MongoDB" value={60} />
          <SkillProgress skillName="NodeJS & ExpressJS" value={50} />
        </div>
      </div>

      <div>
        <h2 id="projects" className="text-3xl font-extrabold">
          MY PROJECTS & SOURCE CODES
        </h2>
        <div>
          <Projects />
        </div>
      </div>
    </div>
  );
}
