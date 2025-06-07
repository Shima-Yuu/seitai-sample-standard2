import { DotsThreeOutline } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/fadeIn-section";
import Image from "next/image";

const flow = [
  {
    title: "受付・ご案内",
    text: "ご来院後、受付でお名前をお伺いし、問診票のご記入をお願いいたします。お着替えのご案内もさせていただきます。",
    img: "/top/flow1.jpg"
  },
  {
    title: "カウンセリング",
    text: "痛みの症状や原因、生活習慣などを丁寧にお伺いし、最適な施術プランをご提案いたします。",
    img: "/top/flow2.jpg"
  },
  {
    title: "施術",
    text: "お一人おひとりの症状に合わせた施術を、リラックスできる空間で行います。痛みを最小限に抑えた丁寧な施術を心がけています。",
    img: "/top/flow3.jpg"
  },
  {
    title: "お会計・アフターケア",
    text: "施術後の経過説明と、ご自宅でのケア方法をお伝えいたします。次回のご予約も承ります。",
    img: "/top/flow4.jpg"
  },
];

export default function FlowSection() {
  return (
    <section
      className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto"
    >
      <FadeIn>
        <div className="text-center">
          <DotsThreeOutline
            weight="light"
            size={36}
            className="color-text sm:hidden mx-auto mb-1"
          />
          <DotsThreeOutline
            weight="light"
            size={48}
            className="color-text hidden sm:block mx-auto lg:pb-1"
          />
          <h2 className="text-[24px] lg:text-[40px] heading color-text relative inline-block mb-12 sm:mb-20">
            施術の流れ
          </h2>
        </div>
      </FadeIn>

      <div className="max-w-6xl color-text mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 sm:gap-10 sm:gap-y-20 lg:gap-5">
        {flow.map((item, i) => (
          <div key={i} className="relative">
            <div className="font-num absolute top-[-56px] left-[-16px] z-0 text-[60px] leading-none not-italic pointer-events-none select-none">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="relative z-10 flex flex-col">
              <Image
              key={i}
              src={item.img}
              alt={item.title}
              width={600}
              height={427}
              className="rounded-[20px] w-full aspect-[5/3] object-cover mb-4 shadow-custom">

              </Image>
              <h3 className="text-2xl mb-4 heading text-center">{item.title}</h3>
              <p className="text-sm whitespace-pre-wrap leading-relaxed px-2 tracking-wider">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
