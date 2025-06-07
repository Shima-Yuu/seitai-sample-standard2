import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { notoSansJP, fontHeading, fontNum } from "@/lib/fonts";
import { SITE_NAME, SITE_URL, TEL, ADDRESS, POST_CODE, FACEBOOK_LINK, TWITTER_LINK, INSTAGRAM_LINK, EMAIL } from "@/constants/site-info";
import BgPattern from "@/components/ui/bg-pattern";
import ThemeSelector from "@/components/layouts/ThemeSelector";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: `${SITE_NAME}は、渋谷駅直結・土日祝も営業の整体院。肩こり・腰痛・骨盤矯正・産後ケアなど幅広く対応。国家資格者が丁寧に施術します。女性も安心のプライベート空間。ご予約・ご相談はお気軽に。`,
  keywords: [
    "整体院", "渋谷", "肩こり", "腰痛", "骨盤矯正", "産後ケア", "国家資格", "女性専用", "プライベートサロン", "めぐり整体院"
  ],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: SITE_NAME,
    description: "渋谷駅直結・土日祝も営業。肩こり・腰痛・骨盤矯正・産後ケアなど幅広く対応。国家資格者が丁寧に施術します。女性も安心のプライベート空間。",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/ogp.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} OGP画像`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "渋谷駅直結・土日祝も営業。肩こり・腰痛・骨盤矯正・産後ケアなど幅広く対応。国家資格者が丁寧に施術します。女性も安心のプライベート空間。",
    images: [`${SITE_URL}/ogp.jpg`]
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${fontHeading.variable} ${fontNum.variable}`}
      data-theme="pink"
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* JSON-LD 構造化データ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: SITE_NAME,
            image: `${SITE_URL}/ogp.jpg`,
            '@id': SITE_URL,
            url: SITE_URL,
            telephone: TEL,
            address: {
              '@type': 'PostalAddress',
              streetAddress: ADDRESS,
              postalCode: POST_CODE,
              addressCountry: 'JP',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 35.65999999999997,
              longitude: 139.70000000000002
            },
            openingHours: 'Mo-Su 10:00-19:00',
            priceRange: '￥￥',
            sameAs: [
              FACEBOOK_LINK,
              TWITTER_LINK,
              INSTAGRAM_LINK
            ],
            email: EMAIL
          })
        }} />
      </head>
      <body className="">
          <BgPattern />
          <Header />
          {children}
          <ThemeSelector />
          <Footer />
      </body>
    </html>
  );
}
