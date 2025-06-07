// import { getNewsList } from '@/libs/microcms'; // APIラッパーを別ファイルで作ると◎
import Link from "next/link";
import {
  Megaphone,
} from "@phosphor-icons/react/dist/ssr";

// ニュースデータを変数化
const newsData = [
  {
    id: "new-site",
    category: "お知らせ",
    date: "2023年12月12日",
    title: "ホームページを公開しました",
  },
  // 必要に応じて追加可能
];

export default async function NewsListPage() {
  //   const data = await getNewsList(); // microCMSから取得

  return (
    <main>
      <div className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto pt-26 lg:pt-32">
        <div className="text-center">
          <Megaphone
            weight="light"
            size={36} // スマホサイズ
            className="color-text sm:hidden mx-auto mb-1" // sm未満で表示
          />
          <Megaphone
            weight="light"
            size={48} // PCサイズ
            className="color-text hidden sm:block mx-auto mb-1" // sm以上で表示
          />
          <h2 className="text-[24px] lg:text-[40px] heading color-text relative inline-block mb-6 lg:mb-16">
            お知らせ
          </h2>
        </div>
        <div className="mb-10 border-t border-b border-gray-200 divide-y">
          {newsData.map((news, index) => (
            <Link
              key={index}
              href={`/news/${news.id}`}
              className="block hover:opacity-60 transition-all duration-400"
            >
              <div className="grid py-8 sm:grid-cols-4">
                <div className="mb-4 sm:mb-0 lg:w-1/2">
                  <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                    <span
                      className="heading text-deep-purple-accent-400"
                      aria-label="Category"
                    >
                      {news.category}
                    </span>
                    <p className="text-gray-600">{news.date}</p>
                  </div>
                </div>
                <div className="sm:col-span-3 lg:col-span-3">
                  <p className="text-lg sm:text-md xl:text-md heading">
                    {news.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
