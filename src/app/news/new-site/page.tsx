import Image from "next/image";
import Link from "next/link";
import { Megaphone } from "@phosphor-icons/react/dist/ssr";

// ニュース記事の内容を変数化
const newsContent = {
  category: "お知らせ",
  date: "2023年12月12日",
  title: "ホームページを公開しました",
  image: {
    src: "/news/news1.jpg",
    alt: "ホームページ公開のお知らせ",
    width: 800,
    height: 400,
  },
  paragraphs: [
    "この度、当院のホームページを公開いたしました。",
    "施術内容や料金、スタッフの紹介など、詳しい情報を掲載しています。",
    "今後も定期的に更新してまいりますので、ぜひご覧ください。"
  ]
};

export default function NewsDetailPage() {
  return (
    <main>
      <div className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto pt-26 lg:pt-32">
        <div className="text-center">
          <Megaphone
            weight="light"
            size={36}
            className="color-text sm:hidden mx-auto mb-1"
          />
          <Megaphone
            weight="light"
            size={48}
            className="color-text hidden sm:block mx-auto mb-1"
          />
          <h2 className="text-[24px] lg:text-[40px] heading color-text relative inline-block mb-6 lg:mb-16">
            お知らせ
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-1 text-xs font-semibold tracking-wide uppercase mb-4">
            <span className="heading text-deep-purple-accent-400">
              {newsContent.category}
            </span>
            <p className="text-gray-600">{newsContent.date}</p>
          </div>

          <h1 className="text-2xl lg:text-3xl heading font-medium color-text mb-8">
            {newsContent.title}
          </h1>

          <div className="mb-8">
            <Image
              src={newsContent.image.src}
              alt={newsContent.image.alt}
              width={newsContent.image.width}
              height={newsContent.image.height}
              className="w-full aspect-video object-cover rounded-xl"
            />
          </div>

          <div className="space-y-4 color-text">
            {newsContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-sm tracking-wider">
                {paragraph}
            </p>
            ))}
          </div>

          <div className="mt-12 text-right">
            <Link
              href="/news"
              className="heading inline-flex items-center hover:opacity-60 transition-all duration-400"
            >
              お知らせ一覧へ戻る
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
