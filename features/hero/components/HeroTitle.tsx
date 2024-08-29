import React from "react";
import { cn } from "@/lib/utils";
import BoxReveal from "@/components/magicui/box-reveal";

interface HeroTitleProps {
  title: string;
  boxColor?: string;
  duration?: number;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({
  title,
  boxColor = "#5046e6",
  duration = 0.5,
}) => {
  return (
    <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
      <BoxReveal boxColor={boxColor} duration={duration}>
        <h1
          className={cn(
            "text-black dark:text-white",
            "relative mx-0 max-w-[43.5rem] pt-5 md:mx-auto md:px-4 md:py-2",
            "text-left tracking-tighter text-balance md:text-center font-semibold",
            "md:text-7xl lg:text-7xl sm:text-7xl text-5xl"
          )}
        >
          {title}
        </h1>
      </BoxReveal>
    </div>
  );
};

export default HeroTitle;
