import React from "react";
import BoxReveal from "@/components/magicui/box-reveal";

interface HeroDescriptionProps {
  boxColor?: string;
  duration?: number;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({
  boxColor = "#5046e6",
  duration = 0.5,
}) => {
  return (
    <BoxReveal boxColor={boxColor} duration={duration}>
      <p className="max-w-xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg">
        <b>エンタメ動画</b>、<b>ビジネス動画</b>、<b>解説動画</b>
        の編集
        <br />
        Webサイトは<b>Next.js 14</b>、<b>TypeScript</b>、<b>Tailwind CSS</b>
        でコーディング
        <br />
        動画もコードも、アイデアを形にするのが得意です！
      </p>
    </BoxReveal>
  );
};

export default HeroDescription;
