export interface Member {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export const members: Member[] = [
  {
    id: "komatu-nana",
    name: "小松菜奈",
    role: "CEO",
    imageUrl: "/test.jpg",
    bio: "小松菜奈は当社のCEOとして、10年以上にわたりリーダーシップを発揮してきました。...",
  },
  {
    id: "suda-masaki",
    name: "菅田将暉",
    role: "CTO",
    imageUrl: "/test.jpg",
    bio: "菅田将暉は当社のCEOとして、10年以上にわたりリーダーシップを発揮してきました。...",
  },
  {
    id: "tsurugi",
    name: "ヒイラギ ツルギ",
    role: "CFO",
    imageUrl: "/test.jpg",
    bio: "ヒイラギ ツルギは当社のCEOとして、10年以上にわたりリーダーシップを発揮してきました。...",
  },
  {
    id: "subaru",
    name: "大空 スバル",
    role: "COO",
    imageUrl: "/test.jpg",
    bio: "大空 スバルは当社のCEOとして、10年以上にわたりリーダーシップを発揮してきました。...",
  },
  // 他のメンバーを追加...
];
export const outsourceMembers: Member[] = [
  {
    id: "outsource-1",
    name: "立花ひなの",
    role: "フリーランスデザイナー",
    imageUrl: "/test.jpg",
    bio: "立花ひなのは、10年以上の経験を持つフリーランスのUIUXデザイナーです。...",
  },
  {
    id: "outsource-2",
    name: "小森めと",
    role: "契約開発者",
    imageUrl: "/test.jpg",
    bio: "小森めとは、Reactとバックエンド開発のスペシャリストとして活躍しています。...",
  },
  // 他の外注メンバーを追加...
];

export function getMemberById(id: string): Member | undefined {
  return [...members, ...outsourceMembers].find((member) => member.id === id);
}

// export function getMemberById(id: string): Member | undefined {
//   return members.find((member) => member.id === id);
// }
