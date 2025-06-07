import { Noto_Sans_JP, Kiwi_Maru, Open_Sans  } from "next/font/google";

export const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400"],
  preload: false,
  variable: "--font-noto-sans-jp",
  display: "swap",
  fallback: ["Hiragino Sans", "Hiragino Kaku Gothic ProN", "sans-serif"],
});

export const fontHeading = Kiwi_Maru({
  subsets: ["latin"],
  weight: ["400", "500"], // ← 700を削除
  variable: "--font-heading",
  display: "swap",
  fallback: ["Hiragino Mincho ProN", "serif"],
});

export const fontNum = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-num',
})