import React from "react";
import * as Showcase from "./components";

interface ShowcaseItem {
  title: string;
  image: string;
  href: string;
  affiliation: string;
}

interface ShowcaseSectionProps {
  showcases: ShowcaseItem[];
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ showcases }) => (
  <section id="showcase" className="container py-14">
    <Showcase.Title />
    <Showcase.Description />
    <Showcase.Carousel showcases={showcases} />
  </section>
);

export default ShowcaseSection;
