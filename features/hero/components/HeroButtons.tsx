"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";

interface HeroButtonsProps {
  primaryHref: string;
  primaryText: string;
  secondaryHref: string;
  secondaryText: string;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({
  primaryHref,
  primaryText,
  secondaryHref,
  secondaryText,
}) => {
  return (
    <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
        <Link
          href={primaryHref}
          className={cn(
            buttonVariants({
              variant: "default",
              size: "lg",
            }),
            "gap-2 whitespace-pre md:flex",
            "group relative w-full gap-1 rounded-xl text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50"
          )}
        >
          {primaryText}
          <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
        </Link>
        <Link
          href={secondaryHref}
          className={cn(
            buttonVariants({
              size: "lg",
              variant: "outline",
            }),
            "gap-2 whitespace-pre md:flex",
            "group relative w-full gap-1 overflow-hidden rounded-xl text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-300 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-black dark:hover:ring-offset-black"
          )}
        >
          {secondaryText}
          <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
          <BorderBeam
            isActive={true}
            onAnimationComplete={() => {}}
            duration={1.5}
            size={70}
            borderWidth={3}
            colorFrom="#22c55e"
            colorTo="#14b8a6"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroButtons;
