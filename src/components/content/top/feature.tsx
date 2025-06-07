import Image from "next/image";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/fadeIn-section";

const features = [
  {
    title: "根本の原因を突き止める<br />丁寧な問診",
    text: `「なぜ痛みが出るのか」「どうすれば改善するのか」。同じ症状でも、原因は人それぞれ異なります。\n\n問診では、いつ、どんな時に症状が出るのか、普段の生活習慣なども含めて丁寧にお伺いします。そこから本当の原因を見つけ出し、最適な施術プランをご提案いたします。`,
    image: "/top/feature1.jpg",
  },
  {
    title: "痛みを最小限に抑えた<br />優しい施術",
    text: `「整体は痛そう」「怖い」という不安の声をよく耳にします。当院では、痛みの少ない独自の施術法を採用。\n\n丁寧な検査と施術で、必要最小限の刺激で最大限の効果を引き出します。痛みの少ない施術により、お身体への負担を抑え、早期回復を目指します。`,
    image: "/top/feature2.jpg",
  },
];

export default function FeatureSection() {
  return (
    <section
      id="feature"
      className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto"
    >
      <FadeIn>
        <div className="text-center">
          <Sparkle
            weight="light"
            size={36} // スマホサイズ
            className="color-text sm:hidden mx-auto mb-1" // sm未満で表示
          />
          <Sparkle
            weight="light"
            size={48} // PCサイズ
            className="color-text hidden sm:block mx-auto mb-1" // sm以上で表示
          />
          <h2 className="text-[24px] lg:text-[40px] heading color-text relative inline-block mb-6 lg:mb-16">
            選ばれる理由
          </h2>
        </div>
      </FadeIn>

      <div className="color-text mx-auto sm:gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid gap-6 lg:gap-10 lg:grid-cols-2 items-center ${
              index > 0 ? "mt-8 md:mt-20" : ""
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="lg:pr-10 order-2 lg:order-1">
                  <h3
                    className="heading mb-6 lg:mb-8 text-2xl font-bold tracking-tight sm:text-4xl leading-[1.4] border-b border-gray-200 pb-4"
                    dangerouslySetInnerHTML={{ __html: feature.title }}
                  />
                  <p className="mb-6 text-sm lg:text-lg color-text-sub">
                    {feature.text}
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <Image
                    className="object-cover aspect-video md:aspect-[5/3] lg:aspect-[5/3] rounded-2xl border border-gray-200 shadow-custom"
                    src={feature.image}
                    alt={feature.title}
                    width={1000}
                    height={1000}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="order-1 lg:order-1">
                  <Image
                    className="object-cover aspect-video md:aspect-[5/3] lg:aspect-[5/3] rounded-2xl border border-gray-200 shadow-custom"
                    src={feature.image}
                    alt={feature.title}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="lg:pl-10 order-2 lg:order-2">
                  <h3
                    className="heading mb-6 lg:mb-8 text-2xl font-bold tracking-tight sm:text-4xl leading-[1.4] border-b border-gray-200 pb-4"
                    dangerouslySetInnerHTML={{ __html: feature.title }}
                  />
                  <p className="mb-6 text-sm lg:text-lg color-text-sub">
                    {feature.text}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
