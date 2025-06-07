import Link from "next/link";
import { Megaphone } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/fadeIn-section";

const newsItems = [
  {
    category: "お知らせ",
    date: "2023年12月12日",
    title: "ホームページを公開しました",
    link: "/news/new-site"
  }
];

export default function NewsSection() {
  return (
    <section className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-12 px-4 md:px-16 lg:px-8 lg:py-20">
      <FadeIn>
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
      </FadeIn>
      <div className="mb-10 border-t border-b border-gray-200 divide-y">
        {newsItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="block hover:opacity-60 transition-all duration-400"
          >
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0 lg:w-1/2">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <span
                    className="heading text-deep-purple-accent-400"
                    aria-label="Category"
                  >
                    {item.category}
                  </span>
                  <p className="text-gray-600">{item.date}</p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-3">
                <p className="text-lg sm:text-md xl:text-md heading">
                  {item.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-right">
        <Link
          href="/news"
          aria-label=""
          className="heading inline-flex items-center hover:opacity-60 transition-all duration-400"
        >
          お知らせ一覧を見る
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
