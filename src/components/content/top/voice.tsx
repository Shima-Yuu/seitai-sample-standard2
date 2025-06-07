import Image from "next/image";
import FadeIn from "@/components/ui/fadeIn-section";
import { UsersThree } from "@phosphor-icons/react/dist/ssr";

const voices = [
  {
    name: "山田 太郎様",
    title: "腰痛が改善しました",
    comment: "長年悩んでいた腰痛が、こちらに通って本当に楽になりました。先生も親切で安心して通えます。",
    image: "/top/about.jpg"
  },
  {
    name: "佐藤 花子様",
    title: "丁寧な施術で安心",
    comment: "初めての整体で不安でしたが、丁寧に説明してくださり安心して受けられました。体も軽くなりました！",
    image: "/top/feature1.jpg"
  },
  {
    name: "鈴木 一郎様",
    title: "スポーツのケガが早く治った",
    comment: "部活でケガをして困っていましたが、的確な施術で早く復帰できました。感謝しています。",
    image: "/top/flow1.jpg"
  },
  {
    name: "田中 美咲様",
    title: "子連れでも安心して通えました",
    comment: "小さい子どもを連れての通院でしたが、スタッフの方々がとても親切で助かりました。体調も良くなり感謝しています。",
    image: "/top/flow2.jpg"
  }
];

export default function VoiceSection() {
  return (
    <section className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
      <FadeIn>
        <div className="text-center">
          <UsersThree
            weight="light"
            size={36} // スマホサイズ
            className="color-text sm:hidden mx-auto mb-1" // sm未満で表示
          />
          <UsersThree
            weight="light"
            size={48} // PCサイズ
            className="color-text hidden sm:block mx-auto mb-1" // sm以上で表示
          />
          <h2 className="text-[24px] lg:text-[40px] heading color-text relative inline-block mb-6 lg:mb-16">
            お客様の声
          </h2>
        </div>
      </FadeIn>
      <div className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {voices.map((item, i) => (
          <FadeIn key={i}>
            <div className="shadow-custom bg-white border border-gray-200 rounded-lg lg:rounded-2xl p-3 md:p-6 flex flex-col items-center text-center h-full">
              <div className="w-full aspect-[16/9] mb-2 md:mb-4 rounded-md lg:rounded-xl overflow-hidden border border-gray-100 relative">
                <Image src={item.image} alt={item.name} fill className="object-cover w-full h-full" />
              </div>
              <div className="heading font-bold text-base md:text-xl color-accent mb-1 md:mb-1.5">{item.name}</div>
              <div className="heading font-semibold text-sm md:text-xl mb-1 md:mb-2">{item.title}</div>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed md:leading-relaxed text-left w-full">{item.comment}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}