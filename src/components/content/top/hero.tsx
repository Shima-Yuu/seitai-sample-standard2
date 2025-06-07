import {
  NotePencil,
  Heartbeat,
  Wheelchair,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import Fv from "@/components/content/top/fv-img";

// ヒーローセクションのコンテンツを変数として定義
const heroContent = {
  banner: "腰の痛み、膝の痛み、首の痛み、肩こり、坐骨神経痛、変形性膝関節症等",
  title: {
    main: "身体のことで悩まないような",
    sub: "人生をおくってもらいたい。",
  },
  description: "痛みを少しでも取り除いて、<br />より豊かな人生を送ってもらえるように",
  features: [
    { text: "根本原因を突き止める丁寧な問診", icon: NotePencil },
    { text: "痛みを最小限に抑えた優しい施術", icon: Heartbeat },
    { text: "地域密着での信頼と実績", icon: UsersThree },
    { text: "医療機関との連携体制", icon: Wheelchair },
  ],
  cta: {
    text: "ご予約・お問い合わせ",
    href: "/#contact",
    icon: NotePencil,
  },
};

export default function HeroSection() {
  return (
    <section className="px-4 pb-16 pt-26 mx-auto sm:max-w-xl md:max-w-full md:px-16 lg:px-8 md:pr-0 lg:pr-0 lg:pb-20 lg:pt-32">
      <div className="grid gap-5 md:gap-8 lg:gap-5 row-gap-10 lg:grid-cols-2">
        <div className="pl-0 md:pl-[2vw] 2xl:pl-[4vw] flex flex-col justify-center md:pr-16 lg:pr-0">
          <div className="max-w-xl mb-6">
            <div className="inline-block mb-2 px-4 py-1 color-accent-bg bg-opacity-80 text-white text-sm rounded">{heroContent.banner}</div>
            <h2 className="heading max-w-lg mb-6 text-2xl font-bold tracking-tight sm:text-4xl leading-[1.4]">
              {heroContent.title.main}
              <br />
              {heroContent.title.sub}
            </h2>
            <p 
              className="text-sm color-text-sub md:text-lg tracking-wider"
              dangerouslySetInnerHTML={{ __html: heroContent.description }}
            />
          </div>
          <div className="heading">
            <ul className="space-y-3">
              {heroContent.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <li key={index} className="flex items-center gap-1">
                    <span>
                      <Icon size={22} weight="light" />
                    </span>
                    {feature.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Fv />
      </div>
    </section>
  );
}
