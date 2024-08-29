import HeroSection from "@/features/hero/HeroSection";
import ShowcaseSection from "@/features/showcase/ShowcaseSection";

export default async function Home() {
  const showcases = [
    {
      title: "動画編集",
      image: "/test.jpg",
      href: "/video-editing",
      affiliation: "ウェディングムービー",
    },
    {
      title: "コーディング",
      image: "/test.jpg",
      href: "/coding",
      affiliation: "Reactアプリケーション",
    },
    {
      title: "動画制作",
      image: "/test.jpg",
      href: "/video-production",
      affiliation: "プロモーションビデオ",
    },
    {
      title: "ウェブデザイン",
      image: "/test.jpg",
      href: "/web-design",
      affiliation: "ポートフォリオサイト",
    },
  ];

  return (
    <>
      <HeroSection />
      <ShowcaseSection showcases={showcases} />
    </>
  );
}

// import { MagicCard } from "@/components/magicui/magic-card";

// import HeroSection from "@/features/hero/HeroSection";
// import ShowcaseSection from "@/features/showcase/ShowcaseSection";

// export default function Home() {
//   const showcases = [
//     {
//       title: "動画編集",
//       image: "/test.jpg",
//       href: "/video-editing",
//       affiliation: "ウェディングムービー",
//     },
//     {
//       title: "コーディング",
//       image: "/test.jpg",
//       href: "/coding",
//       affiliation: "Reactアプリケーション",
//     },
//     {
//       title: "動画制作",
//       image: "/test.jpg",
//       href: "/video-production",
//       affiliation: "プロモーションビデオ",
//     },
//     {
//       title: "ウェブデザイン",
//       image: "/test.jpg",
//       href: "/web-design",
//       affiliation: "ポートフォリオサイト",
//     },
//   ];

//   return (
//     // <MagicCard gradientColor={"#FFA50080"}>
//     <main>
//       <HeroSection />
//       <ShowcaseSection showcases={showcases} />
//     </main>
//     // </MagicCard>
//   );
// }

// const ReviewCard = ({
//   img,
//   name,
//   username,
//   body,
// }: {
//   img: string;
//   name: string;
//   username: string;
//   body: string;
// }) => {
//   return (
//     <figure
//       className={cn(
//         "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
//         // light styles
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         // dark styles
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img className="rounded-full" width="32" height="32" alt="" src={img} />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">
//             {name}
//           </figcaption>
//           <p className="text-xs font-medium dark:text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{body}</blockquote>
//     </figure>
//   );
// };

// export interface ShowcaseCardProps {
//   title: string;
//   image: string;
//   href: string;
//   affiliation?: string;
// }

// export function ShowcaseCard({
//   title,
//   image,
//   href,
//   affiliation,
// }: ShowcaseCardProps) {
//   return (
//     <Link
//       href={href}
//       className="flex flex-col gap-2 group relative overflow-hidden cursor-pointer"
//     >
//       <div className="relative w-[500px] h-[300px]">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover rounded-xl"
//         />
//       </div>
//       <div className="flex flex-col">
//         <div className="group inline-flex cursor-pointer items-center justify-start gap-1 duration-200 hover:text-neutral-700 dark:hover:text-neutral-200 text-xl font-semibold text-neutral-700 dark:text-neutral-300">
//           {title}
//           <ChevronRightIcon className="size-4 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
//         </div>
//         <p className="text-neutral-400 text-sm">{affiliation}</p>
//       </div>
//     </Link>
//   );
// }
