import { House } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/fadeIn-section";
import Image from "next/image";

const flow = [
  {
    title: "お問い合わせ・ご相談",
    text: "まずはお電話またはお問い合わせフォームより、ご相談ください。「どんなサービスがあるのか知りたい」「利用できるかどうか不安」といった内容でも構いません。ご本人またはご家族、ケアマネジャーの方からのご相談も受け付けております。",
    img: "/flow/flow01.webp"
  },
  {
    title: "ご見学・施設のご案内",
    text: "実際の施設をご見学いただきながら、サービス内容や利用方法をご説明いたします。施設の雰囲気、スタッフの対応、設備などをご確認いただき、納得いただいたうえでご検討いただけます。\n\n※見学は予約制となりますので、事前にご連絡ください。",
    img: "/flow/flow02.webp"
  },
  {
    title: "ケアマネジャーとの連携・ご相談",
    text: "ご本人の状態やご希望に応じて、ケアマネジャーと連携しながらサービス内容を決定していきます。ケアマネジャーがいない場合も、地域包括支援センターをご案内することも可能です。\n\n必要に応じて、施設側からケアマネジャーへ連絡を取ることも可能です。",
    img: "/flow/flow03.webp"
  },
  {
    title: "ご契約・ご利用開始",
    text: "サービス内容にご納得いただいたうえで契約を行います。契約後、具体的なご利用日や送迎時間などを調整し、サービス提供を開始いたします。\n\n初回利用時には、スタッフが丁寧に対応いたしますのでご安心ください。",
    img: "/flow/flow04.webp"
  },
];

export default function FlowPage() {
  return (
    <section
      className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 pt-26 lg:pt-32"
    >
      <FadeIn>
        <div className="text-center">
          <House
            weight="light"
            size={36}
            className="color-text sm:hidden mx-auto mb-1"
          />
          <House
            weight="light"
            size={48}
            className="color-text hidden sm:block mx-auto lg:pb-1"
          />
          <h2 className="text-[24px] lg:text-[40px] heading color-text relative inline-block mb-12 lg:mb-20">
            ご利用の流れ
          </h2>
        </div>
      </FadeIn>

      <div className="max-w-6xl color-text mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 sm:gap-10 lg:gap-5">
        {flow.map((item, i) => (
          <div key={i} className="relative">
            <div className="font-num absolute top-[-53px] left-[-16px] z-0 text-[60px] leading-none not-italic pointer-events-none select-none">
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
