import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";

interface ShowcaseCardProps {
  title: string;
  image: string;
  href: string;
  affiliation: string;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  title,
  image,
  href,
  affiliation,
}) => {
  return (
    <Link
      href={href}
      className="flex flex-col gap-2 group relative overflow-hidden cursor-pointer"
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out whitespace-nowrap text-4xl"
        gradientColor={"#00FFFF80"}
      >
        <div className="relative w-[500px] h-[300px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col p-4">
          <div className="group inline-flex cursor-pointer items-center justify-start gap-1 duration-200 hover:text-neutral-700 dark:hover:text-neutral-200 text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            {title}
            <ChevronRightIcon className="size-4 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
          </div>
          <p className="text-neutral-400 text-sm">{affiliation}</p>
        </div>
      </MagicCard>
    </Link>
  );
};

export default ShowcaseCard;
