"use client";
import { getMemberById } from "@/lib/members";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedGridPattern, {
  GridPattern,
} from "@/components/magicui/animated-grid-pattern";
import TypingAnimation from "@/components/magicui/typing-animation";
import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useState } from "react";
export default function MemberDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const member = getMemberById(params.id);
  const [activeBeamIndex, setActiveBeamIndex] = useState(0);
  if (!member) {
    notFound();
  }

  // この部分は仮のデータです。実際のデータ構造に合わせて調整してください。
  const works = [
    { id: 1, title: "Project A", imageUrl: "/work1.png" },
    { id: 2, title: "Project B", imageUrl: "/work2.png" },
    { id: 3, title: "Project C", imageUrl: "/work3.png" },
  ];
  const handleAnimationComplete = () => {
    setActiveBeamIndex((prevIndex) => (prevIndex + 1) % works.length);
  };

  return (
    <div className="min-h-screen py-20">
      <GridPattern
        numSquares={100}
        maxOpacity={0.2}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="rounded-xl shadow-2xl p-12 mb-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <div className="space-y-8">
                <BlurFade delay={0.8}>
                  <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
                    {member.name}
                  </h1>
                </BlurFade>
                <BlurFade delay={1}>
                  <p className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
                    {member.role}
                  </p>
                  <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-400">
                    {member.bio}
                  </p>
                  <Link
                    href="/members"
                    className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block text-xl"
                  >
                    ← Back to Team Members
                  </Link>
                </BlurFade>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <BlurFade delay={1.5}>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </BlurFade>
            </div>
          </div>
        </div>

        {/* ネオン風グラデーションライン */}
        {/* <div className="w-full h-px bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mb-16 shadow-sm animate-pulse"></div>
         */}
        {/* 作品セクション */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <BlurFade key={work.id} delay={index * 0.2}>
                <div className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <Image
                      src={work.imageUrl}
                      alt={work.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {work.title}
                    </h3>
                  </div>
                  <BorderBeam
                    isActive={index === activeBeamIndex}
                    onAnimationComplete={handleAnimationComplete}
                    duration={3}
                    size={150}
                    borderWidth={5}
                  />
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
