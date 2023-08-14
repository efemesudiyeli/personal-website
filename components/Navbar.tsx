"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useState } from "react";

// Beautify
import {
  GithubIcon,
  LinkedinIcon,
  FileBadge,
} from "../node_modules/lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const [sideBarToggle, setsideBarToggle] = useState<string>("closed");
  const handleSidebar = () => {
    if (sideBarToggle === "closed") {
      setsideBarToggle("open");
    } else {
      setsideBarToggle("closed");
    }
  };

  return (
    <header className=" mb-10 border-b sticky top-0 z-50 bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          {/* PC Logo */}
          <a href="/" className="mr-6 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-6 w-6"
            >
              <rect width="256" height="256" fill=""></rect>
              <line
                x1="128"
                y1="0"
                x2="256"
                y2="384"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="128"
                y1="0"
                x2="0"
                y2="384"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
            </svg>

            <span className="hidden font-bold sm:inline-block">awoken</span>
          </a>
          {/* PC Nav */}
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul>
                      <li>
                        <Link href="/docs" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} !justify-start !w-full`}
                          >
                            Who am i?
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/docs" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} !justify-start !w-full`}
                          >
                            Skills
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/docs" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} !justify-start !w-full`}
                          >
                            Projects&nbsp;&amp;&nbsp;Source&nbsp;Codes
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Documentation
                    </NavigationMenuLink>
                  </Link>
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
        <div className="flex flex-1 items-center justify-end space-x-2 ">
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
                  <a
                    href="/public/assets/resume.pdf"
                    download
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FileBadge size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download my resume (CV)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <ModeToggle />
          </nav>
        </div>
      </div>

      {/* Backdrop Effect */}
      <div
        data-state={sideBarToggle}
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=closed]:hidden"
        style={{ pointerEvents: "auto" }}
        data-aria-hidden="true"
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <aside
        role="dialog"
        data-state={sideBarToggle}
        className="fixed z-50 gap-4 bg-background p-6 shadow-lg  ease-in-out inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm pr-0 data-[state=closed]:hidden"
        tabIndex={-1}
        style={{ pointerEvents: "auto" }}
      >
        <a className="flex items-center" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="mr-2 h-4 w-4"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
          </svg>
          <span className="font-bold">shadcn/ui</span>
        </a>
        <div
          className="relative overflow-hidden my-4 h-[calc(100vh-8rem)] pb-10 pl-6"
          style={{ position: "relative" }}
        >
          <nav className="min-w-full table">
            <div className="flex flex-col space-y-3">
              <a className="" href="/docs">
                Documentation
              </a>
              <a className="" href="/docs/components/accordion">
                Components
              </a>
              <a className="" href="/themes">
                Themes
              </a>
              <a className="" href="/examples">
                Examples
              </a>
              <a className="" href="/docs/figma">
                Figma
              </a>
              <a className="" href="https://github.com/shadcn/ui">
                GitHub
              </a>
              <a className="" href="https://twitter.com/shadcn">
                Twitter
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">Getting Started</h4>
                <a className="text-muted-foreground" href="/docs">
                  Introduction
                </a>
                <a className="text-muted-foreground" href="/docs/installation">
                  Installation
                </a>
                <a
                  className="text-muted-foreground"
                  href="/docs/components-json"
                >
                  components.json
                </a>
                <a className="text-muted-foreground" href="/docs/theming">
                  Theming
                </a>
                <a className="text-muted-foreground" href="/docs/dark-mode">
                  Dark mode
                </a>
                <a className="text-muted-foreground" href="/docs/cli">
                  CLI
                </a>
                <a
                  className="text-muted-foreground"
                  href="/docs/components/typography"
                >
                  Typography
                </a>
                <a className="text-muted-foreground" href="/docs/figma">
                  Figma
                </a>
                <a className="text-muted-foreground" href="/docs/changelog">
                  Changelog
                </a>
                <a className="text-muted-foreground" href="/docs/about">
                  About
                </a>
              </div>
            </div>
          </nav>
        </div>

        <button
          onClick={handleSidebar}
          type="button"
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <path
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </aside>
    </header>
  );
}
