import Image from "next/image";
import FadeIn from "@/components/ui/fadeIn-section";
import { WarningCircle, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { SITE_NAME } from "@/constants/site-info";

const problems = [
  "医療機関に通っているけど改善されない",
  "交通事故の後遺症の痛みがなかなか引かない",
  "スポーツで怪我をしたけれど試合に間に合わせたい！",
  "薬を使っても症状が良くならない",
  "医療機関に通っているけど改善されない",
  "交通事故の後遺症の痛みがなかなか引かない"
];

export default function ProblemSection() {
  return (
    <section id="problems" className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
        <FadeIn>
        <div className="text-center">
          <WarningCircle
            weight="light"
            size={36}
            className="color-text sm:hidden mx-auto mb-1"
          />
          <WarningCircle
            weight="light"
            size={48}
            className="color-text hidden sm:block mx-auto lg:pb-1"
          />
          <h2 className="text-[24px] lg:text-[40px] heading color-text relative inline-block mb-12 sm:mb-10">
          こんなお悩みはありませんか？
          </h2>
        </div>
      </FadeIn>
        <div className="flex flex-col items-center gap-6 lg:gap-12">
          {/* 画像 */}
          <div className="w-full max-w-[550px] aspect-[16/9] flex-1 flex items-center justify-start py-0 relative shadow-custom">
            <Image src="/top/problem.jpg" alt="肩を痛めて悩む女性" fill className="rounded-xl object-cover w-full h-full border border-gray-200" />
          </div>
          {/* リスト */}
          <div className="flex-[2_2_0%] flex flex-col justify-center">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problems.map((item, i) => (
                <li key={i} className="heading flex items-start gap-2 text-base md:text-lg color-text bg-white border border-gray-200 rounded-lg lg:rounded-2xl shadow-custom p-3 md:p-6">
                  <span className="inline-flex items-center justify-center text-[22px] color-accent self-start mt-[2px] lg:mt-[4px]"><CheckCircle weight='regular' /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* 強調メッセージ（画像風リデザイン） */}
        <FadeIn>

        <div className="pt-8 lg:mt-6 w-full flex flex-col items-center justify-center relative overflow-visible">
          {/* 左：円形写真＋装飾（正円を厳密に） */}
          <div className="relative flex-shrink-0 mb-2 md:mb-0 md:mr-8 flex items-center justify-center" style={{width: 160, height: 160}}>
            {/* 円形写真（正円・線なし） */}
            <div className="w-[140px] h-[140px] rounded-full border border-gray-200 overflow-hidden z-10 flex items-center justify-center">
              <Image src="/top/people.jpg" alt="院長写真" width={140} height={140} className="object-cover w-full h-full" />
            </div>
            {/* 丸い装飾（写真より前に重ねる） */}
            {/* <span className="absolute left-2 top-2 w-[48px] h-[48px] rounded-full bg-[var(--color-accent)] opacity-20 z-20" />
            <span className="absolute left-24 top-0 w-[36px] h-[36px] rounded-full bg-sky-200 opacity-25 z-20" /> */}
            {/* <span className="absolute left-20 bottom-2 w-[56px] h-[56px] rounded-full bg-yellow-100 opacity-35 z-20" /> */}
          </div>
          {/* 右：強調テキスト（「改善します。」をさらに強調） */}
          <div className="heading flex-1 flex flex-col items-center text-center justify-center w-full">
            <span className="text-base md:text-2xl text-gray-500 font-semibold mb-2">{SITE_NAME}では</span>
            <span className="text-[26px] md:text-[46px] leading-relaxed">
              <span className="font-extrabold text-black">そのお悩みの</span>
              <span className="color-accent">
                根本改善を<br className="block md:hidden" />目指します。
              </span>
            </span>
          </div>
        </div>
        </FadeIn>
    </section>
  );
}