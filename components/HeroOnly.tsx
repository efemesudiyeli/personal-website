import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import CodeSVG from "./CodeSVG";
export default function HeroOnly() {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 ">
      <div className="border-l ps-6 font-sans max-md:order-2 max-md:z-10 max-md:backdrop-blur-sm dark:max-md:backdrop-brightness-50">
        <h1 className="text-5xl mb-4 font-bold">
          Exploring the Digital Frontier: My Journey in the World of Software
        </h1>
        <p className="text-xl leading-7">
          Greetings! I&apos;m Efe, a passionate web developer who brings ideas
          to life using the power of NextJS, React, and Tailwind. At 21,
          Freelancing allows me to blend these passions into innovative digital
          solutions. My journey into the world of development was a natural
          fusion of curiosity and creativity. I thrive on challenges,
          transforming lines of code into seamless user experiences. From
          dynamic web applications to responsive designs, I revel in crafting
          interfaces that leave a lasting impact. Outside the realm of coding,
          you&apos;ll find me creating tunes and exploring new melodies. Music
          fuels my creative spirit and complements my coding odyssey perfectly.
          <br /> <br />
          <span className="inline-block text-primary/60">
            Thank you for dropping by my digital realm! Whether you&apos;re a
            fellow developer, someone eager to collaborate, I invite you to join
            me on this journey. Feel free to connect, share your thoughts, or
            embark on new ventures together.
          </span>
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger className="max-md:w-full w-1/3 bg-primary text-secondary px-5 py-2 rounded-md font-bold mt-3">
            Contact
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Contact via?</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <a
              href={"https://www.instagram.com/awokendev/"}
              target="_blank"
              rel="noreferrer"
            >
              <DropdownMenuItem>Instagram</DropdownMenuItem>
            </a>
            <a
              href={"mailto:efemesudiyeli@gmail.com"}
              target="_blank"
              rel="noreferrer"
            >
              <DropdownMenuItem>Email</DropdownMenuItem>
            </a>
            <a
              href={
                "https://wa.me/5459114518?text=Hello%20i%20came%20from%20your%20website"
              }
              target="_blank"
              rel="noreferrer"
            >
              <DropdownMenuItem>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      Whatsapp
                      <TooltipContent>
                        <p>Don&apos;t call me before we talk please.</p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </DropdownMenuItem>
            </a>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className=" ">
        <CodeSVG />
      </div>
    </div>
  );
}
