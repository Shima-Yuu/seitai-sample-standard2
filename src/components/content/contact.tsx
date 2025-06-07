import {
  InstagramLogo,
  Phone,
  EnvelopeSimple,
  NotePencil,
} from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/fadeIn-section";
import { INSTAGRAM_LINK, TEL, EMAIL } from "@/constants/site-info";
import Form from "@/components/forms/contact-form";

export default function ContactSection() {

  return (
    <section
      id="contact"
      className="scroll-mt-[60px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-12 px-4 md:px-16 lg:px-8 lg:py-20 pt-26 lg:pt-32"
    >
      <FadeIn>
        <div className="text-center">
          <NotePencil
            weight="light"
            size={36} // スマホサイズ
            className="color-text sm:hidden mx-auto mb-1" // sm未満で表示
          />
          <NotePencil
            weight="light"
            size={48} // PCサイズ
            className="color-text hidden sm:block mx-auto mb-1" // sm以上で表示
          />
          <h2 className="text-[24px] lg:text-[40px] heading color-text relative inline-block mb-6 lg:mb-16">
            お問い合わせ
          </h2>
        </div>
      </FadeIn>

      <p className="lg:text-center text-sm color-text mb-6 lg:mb-16">
          ご予約やお問い合わせは、お電話・メール・LINEなど、お好みの方法でお気軽にご連絡ください。
          <br />
          初めての方もお気軽にご相談いただけます。丁寧にご説明させていただきます。
        </p>
      <div className="lg:flex lg:items-start lg:-mx-6">
        <div className="lg:w-1/2 lg:mx-6 mt-0 lg:mt-12">
          <h3 className="text-sm lg:text-md text-center lg:text-left font-semibold color-text dark:text-white">
            以下からご予約の方は、予約内容とご希望の日時をお知らせください。<br />
            お問い合わせの方は、ご質問内容をご記入ください。
          </h3>

          

          <div className="mt-6 space-y-8 md:mt-8">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-60 transition-all duration-400"
            >
              <span className="border color-accent-border rounded-full w-[40px] h-[40px] flex items-center justify-center">
                <InstagramLogo size={24} weight="light" />
              </span>
              <span className="mx-2 color-text tracking-wider">@meguri_seitai</span>
            </a>

            <a
              href={`tel:${TEL}`}
              className="flex items-center hover:opacity-60 transition-all duration-400"
            >
              <span className="border color-accent-border rounded-full w-[40px] h-[40px] flex items-center justify-center">
                <Phone size={24} weight="light" />
              </span>
              <span className="mx-2 color-text tracking-wider">{TEL}</span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center hover:opacity-60 transition-all duration-400"
            >
              <span className="border color-accent-border rounded-full w-[40px] h-[40px] flex items-center justify-center">
                <EnvelopeSimple size={24} weight="light" />
              </span>
              <span className="mx-2 color-text tracking-wider">{EMAIL}</span>
            </a>

            <a
              href="#"
              className="flex items-center hover:opacity-60 transition-all duration-400"
            >
              <span className="border color-accent-border rounded-full w-[40px] h-[40px] flex items-center justify-center">
                <img src="/icons/line.png" alt="LINE" className="w-6 h-6" />
              </span>
              <span className="mx-2 color-text tracking-wider">LINEでお問い合わせ</span>
            </a>
          </div>
        </div>

        <div className="mt-8 lg:w-1/2 lg:mx-6 lg:mt-0">
          <div className="border border-gray-200 w-full px-4 py-6 lg:px-8 lg:py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-custom">

            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
