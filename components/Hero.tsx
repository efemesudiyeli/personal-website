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

import CodeSVG from "./CodeSVG";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  const c = useTranslations("contactButton");

  return (
    <div className="flex justify-between items-center max-md:flex-wrap max-md:relative ">
      <div className="border-l ps-6 font-sans max-md:order-2 max-md:z-10 max-md:backdrop-blur-sm dark:max-md:backdrop-brightness-50">
        <h1 className="text-5xl mb-4 font-bold">{t("title")}</h1>
        <p className="text-xl leading-7">
          {t("subtitle")}
          <br /> <br />
          <span className="inline-block text-primary/60">{t("heroNote")}</span>
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger className="max-md:w-full w-1/3 bg-primary text-secondary px-5 py-2 rounded-md font-bold mt-3">
            {c("contactButtonHeader")}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{c("contactVia")}</DropdownMenuLabel>
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
              <DropdownMenuItem>{c("contactEmail")}</DropdownMenuItem>
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

      <div className="max-md:absolute max-md:top-24">
        <CodeSVG />
      </div>
    </div>
  );
}
