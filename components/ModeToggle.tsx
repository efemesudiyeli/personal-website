"use client";

import * as React from "react";
import { Moon, Sun, Check } from "../node_modules/lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="flex justify-between"
          onClick={() => setTheme("light")}
        >
          Light {theme == "light" ? <Check size={15} /> : ""}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex justify-between"
          onClick={() => setTheme("dark")}
        >
          Dark {theme == "dark" ? <Check size={15} /> : ""}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex justify-between"
          onClick={() => setTheme("system")}
        >
          System {theme == "system" ? <Check size={15} /> : ""}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
