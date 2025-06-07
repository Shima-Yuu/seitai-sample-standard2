import { Question } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/fadeIn-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const qa = [
  {
    question: "初めてでも大丈夫ですか？",
    answer:
      "はい、初めての方でも安心してご利用いただけます。丁寧なカウンセリングを行い、お体の状態に合わせた施術をご提案いたします。",
  },
  {
    question: "施術時間はどのくらいかかりますか？",
    answer:
      "施術内容により異なりますが、初回は約60分、2回目以降は約30〜45分程度です。\nご予約の際に、お好みの施術時間をお選びいただけます。",
  },
  {
    question: "予約は必要ですか？",
    answer:
      "はい、予約制となっております。\nご希望の日時をお電話またはオンラインでご予約ください。",
  },
  {
    question: "駐車場はありますか？",
    answer:
      "はい。店舗前に駐車場を完備しております。\nお車でのご来店も可能です。",
  },
  {
    question: "施術後は運動しても大丈夫ですか？",
    answer:
      "施術内容により異なりますが、基本的には軽い運動は問題ありません。\n施術後は十分な水分補給を心がけていただくことをお勧めします。",
  },
  {
    question: "保険は使えますか？",
    answer:
      "当店は保険適用外の施術を行っております。\n医療機関での治療と併用される場合は、医師の指示に従ってください。",
  },
  {
    question: "料金はいくらかかりますか？",
    answer:
      "施術内容により異なります。\n初回はカウンセリングを含めて5,000円〜、2回目以降は3,000円〜となっております。",
  },
  {
    question: "営業時間を教えてください",
    answer:
      "平日：10:00〜20:00（最終受付19:00）\n土曜：10:00〜18:00（最終受付17:00）\n日曜・祝日は休業となっております。",
  },
  {
    question: "着替えは必要ですか？",
    answer:
      "はい。施術の際は専用の着替えをご用意しております。\n動きやすい服装でお越しいただくことをお勧めします。",
  },
];

export default function QaSection() {
  return (
    <section id="qa" className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
      <FadeIn>
        <div className="text-center">
          <Question
            weight="light"
            size={36} // スマホサイズ
            className="color-text sm:hidden mx-auto mb-1" // sm未満で表示
          />
          <Question
            weight="light"
            size={48} // PCサイズ
            className="color-text hidden sm:block mx-auto mb-1" // sm以上で表示
          />
          <h2 className="text-[24px] lg:text-[40px] heading color-text relative inline-block mb-6 lg:mb-16">
            よくある質問
          </h2>
        </div>
      </FadeIn>
      <div className="mx-auto max-w-[1000px]">
        <p className="lg:text-center text-sm color-text mb-6 lg:mb-16">
          初めて施術を受けられる方や、ご検討中の方から寄せられる、よくあるご質問をまとめました。
          <br />
          この他にもご不明な点があれば、お気軽にお問い合わせください。
        </p>
        <Accordion type="single" collapsible defaultValue="item-0">
          {qa.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className={`p-4 bg-white rounded-sm shadow-custom border border-gray-200 last:border-b ${
                i !== 0 ? "mt-1" : ""
              }`}
            >
              <AccordionTrigger className="p-0 text-md no-underline hover:no-underline focus:no-underline cursor-pointer">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="p-0 pt-4 border-t border-gray-200 text-md mt-4 whitespace-pre-wrap">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
