import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/fadeIn-section";

// プライバシーポリシーの内容を変数として定義
const privacyPolicyContent = {
  title: "プライバシーポリシー",
  sections: [
    {
      id: 1,
      title: "個人情報の取り扱いについて",
      content: "当店は、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律（以下「個人情報保護法」）を遵守すると共に、以下のプライバシーポリシーに基づき、個人情報を取り扱います。"
    },
    {
      id: 2,
      title: "収集する個人情報の範囲",
      content: "当店は、以下の個人情報を収集する場合があります。",
      list: [
        "氏名",
        "住所",
        "電話番号",
        "メールアドレス",
        "生年月日",
        "性別",
        "その他、当店のサービス提供に必要な情報"
      ]
    },
    {
      id: 3,
      title: "個人情報の利用目的",
      content: "当店は、収集した個人情報を以下の目的で利用します。",
      list: [
        "当店のサービス提供のため",
        "お客様からのお問い合わせへの対応",
        "当店からのお知らせや情報提供",
        "サービスの品質向上のための分析",
        "法令に基づく対応"
      ]
    },
    {
      id: 4,
      title: "個人情報の第三者提供",
      content: "当店は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供いたしません。ただし、当店のサービス提供に必要な範囲内で、委託先に個人情報を委託することがあります。"
    },
    {
      id: 5,
      title: "個人情報の安全管理",
      content: "当店は、個人情報の漏洩、滅失、き損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。"
    },
    {
      id: 6,
      title: "個人情報の開示・訂正・利用停止",
      content: "お客様ご本人からの個人情報の開示、訂正、利用停止のご要望に対しては、法令に基づき適切に対応いたします。"
    },
    {
      id: 7,
      title: "プライバシーポリシーの変更",
      content: "当店は、必要に応じて本プライバシーポリシーを変更することがあります。重要な変更がある場合は、当店のウェブサイト上でお知らせいたします。"
    },
    {
      id: 8,
      title: "お問い合わせ窓口",
      content: "本プライバシーポリシーに関するお問い合わせは、下記の窓口までご連絡ください。"
    }
  ],
  contact: {
    shopName: "ルミカラー",
    address: "〒000-0000 東京都○○区○○町1-2-3",
    phone: "03-1234-5678",
    email: "info@lumicolor.example.com"
  },
  dates: {
    established: "2024年1月1日",
    lastUpdated: "2024年1月1日"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <div className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto pt-26 lg:pt-32">
        <FadeIn>
          <div className="text-center">
            <ShieldCheck
              weight="light"
              size={36} // スマホサイズ
              className="color-text sm:hidden mx-auto mb-1" // sm未満で表示
            />
            <ShieldCheck
              weight="light"
              size={48} // PCサイズ
              className="color-text hidden sm:block mx-auto mb-1" // sm以上で表示
            />
            <h2 className="text-[24px] lg:text-[40px] heading color-text relative inline-block mb-6 lg:mb-16">
              {privacyPolicyContent.title}
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {privacyPolicyContent.sections.map((section) => (
              <div key={section.id} className="mb-12">
                <h3 className="heading text-xl font-bold mb-4 border-b border-gray-200 pb-2">{section.id}. {section.title}</h3>
                <p>{section.content}</p>
                {section.list && (
                  <ul className="list-disc mt-4 pl-6">
                    {section.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="mb-2"><strong>店舗名：</strong> {privacyPolicyContent.contact.shopName}</p>
              <p className="mb-2"><strong>住所：</strong> {privacyPolicyContent.contact.address}</p>
              <p className="mb-2"><strong>電話番号：</strong> {privacyPolicyContent.contact.phone}</p>
              <p className="mb-2"><strong>メールアドレス：</strong> {privacyPolicyContent.contact.email}</p>
            </div>

            <p className="text-sm text-gray-600">
              制定日：{privacyPolicyContent.dates.established}<br />
              最終更新日：{privacyPolicyContent.dates.lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
