import Image from "next/image";
import { ClipboardText } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/fadeIn-section";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

const service = [
  {
    title: "首痛、肩こり",
    text: "長時間のデスクワークやスマートフォンの使用による首・肩のコリや痛みを改善します。独自の施術で血行を促進し、凝り固まった筋肉をほぐすことで、首や肩の可動域を広げ、痛みの軽減を目指します。",
    feature: [
      "同じ姿勢で座っていても肩回りに重たさを感じる",
      "頭痛に悩んでいる",
      "腕全体がだるい・重たいと感じる",
      "めまいや耳鳴り、吐き気が時々ある",
      "過去に四十肩・五十肩を経験した事がある"
    ],
    img: "/menu/menu1.jpg",
  },
  {
    title: "腰痛",
    text: "慢性的な腰痛から急性の腰痛まで、お客様の症状に合わせた施術を行います。正しい姿勢の指導と、腰周りの筋肉や関節の調整により、根本的な改善を目指します。日常生活での予防法もアドバイスいたします。",
    feature: [
      "長年、腰痛に悩まされている",
      "立ち上がった時や、起き上がった時に痛みがある",
      "寝返りで痛みがあり、目覚めてしまう",
      "湿布や痛み止めの薬が効かない",
      "長時間同じ姿勢がしんどい",
      "お尻や下半身のどこかにしびれがある"
    ],
    img: "/menu/menu2.jpg",
  },
  {
    title: "スポーツ外傷",
    text: "スポーツ活動による怪我や痛みに対して、早期回復と再発防止を目指した施術を行います。アスリートの方から趣味のスポーツまで、それぞれの活動レベルに合わせた最適なケアをご提案します。",
    feature: [
      "スポーツ中の怪我で痛みが続いている",
      "以前の怪我の痛みが再発した",
      "怪我の予防をしたい",
      "パフォーマンスを向上させたい",
      "スポーツ復帰のためのリハビリを考えている"
    ],
    img: "/menu/menu3.jpg",
  },
  {
    title: "交通事故でお悩みの方",
    text: "交通事故による首や腰の痛み、むち打ちなどの症状に対して、丁寧な施術で回復をサポートします。保険適用の手続きもお手伝いし、事故後の身体の不調を総合的にケアいたします。",
    feature: [
      "事故後の痛みや違和感が続いている",
      "むち打ち症の症状がある",
      "頭痛やめまいに悩まされている",
      "夜眠れない、不眠が続いている",
      "保険での治療を考えている"
    ],
    img: "/menu/menu4.jpg",
  },
];

interface ServiceSectionProps {
  className?: string;
  showButton?: boolean;
}

export default function ServiceSection({ className = "", showButton = false }: ServiceSectionProps) {
  return (
    <section
      id="service"
      className={`scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto ${className}`}
    >
      <FadeIn>
        <div className="text-center">
          <ClipboardText
            weight="light"
            size={36} // スマホサイズ
            className="color-text sm:hidden mx-auto mb-1" // sm未満で表示
          />
          <ClipboardText
            weight="light"
            size={48} // PCサイズ
            className="color-text hidden sm:block mx-auto mb-1" // sm以上で表示
          />
          <h2 className="text-[24px] lg:text-[40px] heading color-text relative inline-block mb-6 lg:mb-16">
            症状別のお悩み
          </h2>
        </div>
      </FadeIn>
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 shadow-custom overflow-hidden bg-white"
            >
              {/* 画像部分 */}
              <div className="pt-4 px-4">
                <Image
                  key={index}
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={427}
                  className="object-cover object-center w-full aspect-video rounded-2xl"
                />
              </div>

              {/* コンテンツ部分 */}
              <div className="divide-y divide-gray-200">
                <div className="p-6 sm:px-8">
                  <h3 className="heading text-2xl color-text">
                    {item.title}
                  </h3>

                  <p className="tracking-wider mt-4 color-text text-sm">
                    {item.text}
                  </p>

                  {/* <p className="tracking-wider mt-2 sm:mt-4 flex justify-between items-end">
                    <span className="text-sm font-medium color-text-sub">
                      約{(index + 1) * 10}分
                    </span>
                    <span className="text-right">
                      <strong className="text-2xl sm:text-3xl font-num font-medium text-gray-900">
                        ¥{(index + 1) * 10000}
                      </strong>
                      <span className="pl-1 relative top-[-2px] inline text-xs text-gray-500">
                        (税込)
                      </span>
                    </span>
                  </p>
                  <p className="tracking-wider mt-2 sm:mt-4 flex justify-between items-end">
                    <span className="text-sm font-medium color-text-sub">
                      約{(index + 1) * 10}分
                    </span>
                    <span className="text-right">
                      <strong className="text-2xl sm:text-3xl font-num font-medium text-gray-900">
                        ¥{(index + 1) * 10000}
                      </strong>
                      <span className="pl-1 relative top-[-2px] inline text-xs text-gray-500">
                        (税込)
                      </span>
                    </span>
                  </p> */}
                </div>

                <div className="p-6 sm:px-8 sm:pt-4">
                  <p className="text-lg font-medium color-text sm:text-xl">
                    こんな方におすすめ
                  </p>
                  <ul className="tracking-wider mt-2 space-y-2 sm:mt-4 text-sm">
                    {item.feature.map((feature, i) => (
                      <li className="flex items-start gap-1" key={i}>
                        <span className="rounded-full shrink color-accent">
                          <CheckCircle size={20} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showButton && (
        <div className="mt-8 lg:mt-12 text-center">
          <a
            href="/menu"
            className="heading mx-auto mt-2 sm:mt-0 flex items-center justify-center gap-1 rounded-sm w-full lg:w-[300px] h-[50px]  px-3 py-1 text-md font-medium text-white color-accent-bg  border border-white hover:opacity-60 transition-all duration-400"
          >
            料金表はこちらへ
          </a>
        </div>
      )}
    </section>
  );
}
