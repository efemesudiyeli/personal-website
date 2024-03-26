"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useState } from "react";

// Sidebar
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Beautify
import {
  GithubIcon,
  LinkedinIcon,
  FileBadge,
} from "../node_modules/lucide-react";
import "../node_modules/flag-icons/css/flag-icons.min.css";
import { ModeToggle } from "./ModeToggle";

import Link from "next-intl/link";
import { usePathname } from "next-intl/client";


export default function Navbar({ props }: any) {
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);
  const handleSidebar = () => {
    if (sideBarToggle === false) {
      setSideBarToggle(true);
    } else {
      setSideBarToggle(false);
    }
  };
  const pathname = usePathname();

  return (
    <header className=" mb-10 border-b sticky top-0 z-40 bg-background/60 ">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          {/* PC Logo */}
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-6 w-6"
            >
              <circle
                cx="128"
                cy="128"
                r="128"
                className="fill-secondary stroke-primary"
                strokeWidth="10"
              ></circle>
              <circle
                cx="110"
                cy="160"
                r="92"
                className="fill-primary stroke-secondary"
              ></circle>
            </svg>

            <span className="hidden font-bold sm:inline-block">awokendev</span>
          </Link>
          {/* PC Nav */}
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} before:content-['//'] gap-1`}
                    >
                      {props.homepage}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="before:content-['//'] gap-1">
                    {props.aboutMeHeader}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-max">
                      <li>
                        <Link href="/whoami" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()}  space-x-5 !justify-start !w-full`}
                          >
                            {props.whoAmI}
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/whoami/#skills" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} !justify-start !w-full`}
                          >
                            {props.skills}
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/whoami#projects" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} !justify-start !w-full`}
                          >
                            {props.projects}
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        {/* Mobile sidebar button */}
        <button
          className="max-md:inline-flex hidden items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 "
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:R15hja:"
          data-state={sideBarToggle}
          onClick={handleSidebar}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M8 2H13.5C13.7761 2 14 2.22386 14 2.5V12.5C14 12.7761 13.7761 13 13.5 13H8V2ZM7 2H1.5C1.22386 2 1 2.22386 1 2.5V12.5C1 12.7761 1.22386 13 1.5 13H7V2ZM0 2.5C0 1.67157 0.671573 1 1.5 1H13.5C14.3284 1 15 1.67157 15 2.5V12.5C15 13.3284 14.3284 14 13.5 14H1.5C0.671573 14 0 13.3284 0 12.5V2.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </button>

        {/* Mobile logo title */}
        <Link href="/" className=" ms-2 md:hidden flex items-center space-x-2">
          <span className="font-bold">efemesudiyeli</span>
        </Link>

        {/* Links & Darkmode */}
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center space-x-2">
            <a
              href="https://github.com/efemesudiyeli"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/efemesudiyeli"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon size={20} />
            </a>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={'public/assets/resume.pdf'}
                    download
                    locale="false"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileBadge size={20} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download my resume (CV)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="ps-3 flex items-center gap-1">
              <ModeToggle />
              <div className="flex hover:bg-white/10 p-2 rounded-md ">
                <Link
                  href={pathname}
                  locale={props.locale.locale === "en" ? "tr" : "en"}
                >
                  {props.locale.locale == "en" ? (
                    <span className="fi fi-tr" />
                  ) : (
                    <span className="fi fi-gb" />
                  )}
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <Sheet open={sideBarToggle} onOpenChange={setSideBarToggle}>
        <SheetContent className="z-50" side={"left"}>
          <SheetHeader>
            <SheetTitle className="mb-5">efemesudiyeli.dev</SheetTitle>
            <SheetDescription className="grid grid-cols-1 gap-2 text-md text-primary">
              <Link onClick={handleSidebar} href={"/"}>
                {props.homepage}
              </Link>
              <Link onClick={handleSidebar} href={"/whoami"}>
                {props.whoAmI}
              </Link>
              <Link onClick={handleSidebar} href={"/whoami#skills"}>
                {props.skills}
              </Link>
              <Link onClick={handleSidebar} href={"/whoami#projects"}>
                {props.projects}
              </Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header >
  );
}
