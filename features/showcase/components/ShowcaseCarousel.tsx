import React from "react";
import Marquee from "@/components/magicui/marquee";
import { Card as ShowcaseCard } from "./";

interface ShowcaseItem {
  title: string;
  image: string;
  href: string;
  affiliation: string;
}

interface ShowcaseCarouselProps {
  showcases: ShowcaseItem[];
}

const ShowcaseCarousel: React.FC<ShowcaseCarouselProps> = ({ showcases }) => (
  <div className="relative flex flex-col">
    <Marquee pauseOnHover className="py-4 [--duration:40s]">
      {showcases.map((showcase) => (
        <ShowcaseCard key={showcase.title} {...showcase} />
      ))}
    </Marquee>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
  </div>
);

export default ShowcaseCarousel;
