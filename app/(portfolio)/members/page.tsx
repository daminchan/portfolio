import BlurFade from "@/components/magicui/blur-fade";
import TypingAnimation from "@/components/magicui/typing-animation";
import Image from "next/image";
import Link from "next/link";
import { members, outsourceMembers } from "@/lib/members";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/animated-grid-pattern";

export default function MembersPage() {
  return (
    <div className="min-h-screen py-10">
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
      <div className="container mx-auto px-4 max-w-9xl">
        <h1 className="text-6xl md:text-8xl font-bold text-center text-gray-800 dark:text-white mb-16 tracking-tight">
          CREATORS
        </h1>

        <div className=" rounded-lg shadow-lg p-8">
          <div className="flex flex-col gap-16">
            <div>
              <div className="mb-12">
                <BlurFade delay={0.3}>
                  <TypingAnimation
                    className="text-4xl font-bold text-gray-800 dark:text-white md:text-6xl"
                    text="Team Members"
                    duration={50}
                  />
                </BlurFade>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {members.map((member, index) => (
                  <BlurFade key={member.id} delay={0.2 * index} inView>
                    <Link href={`/members/${member.id}`} className="block">
                      <div className="relative group overflow-hidden rounded-lg">
                        <div className="relative aspect-square transition-transform duration-300 group-hover:scale-110">
                          <Image
                            src={member.imageUrl}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 text-gray-800 dark:text-white p-4">
                          <h3 className="text-lg font-semibold">
                            {member.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </BlurFade>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-12">
                <BlurFade delay={0.3}>
                  <TypingAnimation
                    className="text-3xl font-bold text-gray-800 dark:text-white md:text-5xl"
                    text="Outsource Members"
                    duration={50}
                  />
                </BlurFade>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {outsourceMembers.map((member, index) => (
                  <BlurFade key={member.id} delay={0.2 * index} inView>
                    <Link href={`/members/${member.id}`} className="block">
                      <div className="relative group overflow-hidden rounded-lg">
                        <div className="relative aspect-square transition-transform duration-300 group-hover:scale-110">
                          <Image
                            src={member.imageUrl}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 text-gray-800 dark:text-white p-4">
                          <h3 className="text-lg font-semibold">
                            {member.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import BlurFade from "@/components/magicui/blur-fade";
// import BoxReveal from "@/components/magicui/box-reveal";
// import TypingAnimation from "@/components/magicui/typing-animation";
// import { cn } from "@/lib/utils";
// import { Metadata } from "next";
// import Image from "next/image";

// export const metadata: Metadata = {
//   title: "メンバーズ",
//   description: "チームメンバーの紹介ページです。",
// };

// export const members = [
//   {
//     name: "山田太郎",
//     role: "CEO",
//     imageUrl: "/images/yamada.jpg",
//   },
//   {
//     name: "佐藤花子",
//     role: "CTO",
//     imageUrl: "/images/sato.jpg",
//   },
//   // 他のメンバーを追加...
// ];
// export default function MembersPage() {
//   return (
//     <>
//       <div className="min-h-screen py-10">
//         <div className="container mx-auto px-4 max-w-9xl">
//           <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
//             <div className="mb-12">
//               <TypingAnimation
//                 className="text-4xl font-bold text-black dark:text-white md:text-6xl"
//                 text="Team Members"
//                 duration={50}
//               />
//             </div>

//             {/* メンバーの詳細情報と画像 */}
//             <div className="flex flex-col md:flex-row gap-8">
//               <BlurFade delay={0.9} inView>
//                 {/* 左側：メンバーの詳細テキスト */}
//                 <div className="flex-1 text-left">
//                   <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
//                     菅田将暉
//                   </h2>
//                   <p className="text-lg text-gray-700 dark:text-gray-300">
//                     こんにちは、菅田将暉です。動画編集を中心に活動しており、Premiere
//                     Proを使用しています。エンタメやビジネス、解説動画の制作経験があります。
//                     Web開発は趣味として取り組んでおり、Next.jsでシンプルで使いやすいWebページを作成しています。
//                     お気軽にご相談ください。あなたのプロジェクトをサポートできることを楽しみにしています。
//                   </p>
//                 </div>
//               </BlurFade>

//               <BlurFade
//                 delay={1.4}
//                 inView
//                 className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
//               >
//                 {/* 右側：メンバーの画像 */}
//                 <div>
//                   <Image
//                     src="/test.jpg" // 画像のパスを適切に設定してください
//                     alt="菅田将暉"
//                     width={400}
//                     height={400}
//                     className="rounded-lg object-cover w-full h-auto"
//                   />
//                 </div>
//               </BlurFade>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
