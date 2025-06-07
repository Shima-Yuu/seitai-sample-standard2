"use client";

import { useRef } from "react";
import { CurrencyCircleDollar } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/fadeIn-section";
import Link from "next/link";

interface PriceItem {
  category: string;
  items: {
    name: string;
    price: string;
    priceUnit?: string;
    priceNote?: string;
    description?: string;
  }[];
}

interface PriceCardProps {
    item: PriceItem;
    index: number;
  }

const PriceCard = ({ item }: PriceCardProps) => {
  
    return (
        <div className="scroll-mt-[60px] overflow-hidden">
        <div className="p-4 lg:p-6 bg-gray-50 border-b border-gray-200 rounded-t-lg">
          <p className="heading text-xl font-bold tracking-wider">
            {item.category}
          </p>
        </div>
        <div className="p-6">
          <ul className={`space-y-6 ${item.items.length === 1 ? 'lg:flex lg:justify-center' : ''}`}>
            {item.items.map((priceItem, i) => (
              <li key={i} className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 pb-5 border-b border-gray-100 last:border-b-0 last:pb-0 ${item.items.length === 1 ? 'lg:w-full lg:max-w-md' : ''}`}>
                <div className="flex-1">
                  <p className="text-lg font-medium text-gray-900 tracking-wider">
                    {priceItem.name}
                  </p>
                  {priceItem.description && (
                    <p className="mt-1 text-sm text-gray-600">
                      {priceItem.description}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <span className="font-num text-2xl lg:text-2xl font-bold text-gray-900">
                    {priceItem.price}
                  </span>
                  {priceItem.priceUnit && (
                    <span className="text-xs text-gray-500 ml-1">
                      {priceItem.priceUnit}
                    </span>
                  )}
                  {priceItem.priceNote && (
                    <span className="text-xs text-gray-500 ml-1">
                      {priceItem.priceNote}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        </div>

    );
  };

const PriceSection = () => {
  const sectionRef = useRef(null);
  
  const prices: PriceItem[] = [
    {
      category: "首痛・肩こり",
      items: [
        {
          name: "全身整体コース",
          price: "8,800",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "首・肩のコリを中心に、全身の歪みを整えます（60分）"
        },
        {
          name: "集中ケアコース",
          price: "6,600",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "首・肩に特化した集中的な施術を行います（40分）"
        },
        {
          name: "初回お試しコース",
          price: "4,400",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "カウンセリング＋首・肩の施術（50分）"
        }
      ]
    },
    {
      category: "腰痛",
      items: [
        {
          name: "全身整体コース",
          price: "8,800",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "腰痛を中心に、全身の歪みを整えます（60分）"
        },
        {
          name: "集中ケアコース",
          price: "6,600",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "腰痛に特化した集中的な施術を行います（40分）"
        },
        {
          name: "初回お試しコース",
          price: "4,400",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "カウンセリング＋腰痛の施術（50分）"
        }
      ]
    },
    {
      category: "スポーツ外傷",
      items: [
        {
          name: "スポーツ整体コース",
          price: "9,900",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "スポーツ外傷の治療と予防のための施術（60分）"
        },
        {
          name: "メンテナンスコース",
          price: "7,700",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "定期的なケアで怪我の予防を目指します（45分）"
        },
        {
          name: "初回お試しコース",
          price: "5,500",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "カウンセリング＋スポーツケア（50分）"
        }
      ]
    },
    {
      category: "その他",
      items: [
        {
          name: "カウンセリング",
          price: "0",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "初回のカウンセリングは無料です"
        },
        {
          name: "テーピング",
          price: "550",
          priceUnit: "円",
          priceNote: "（税込）〜",
          description: "部位に応じて料金が変わります"
        },
        {
          name: "延長10分",
          price: "1,100",
          priceUnit: "円",
          priceNote: "（税込）",
          description: "各コースに追加可能です"
        }
      ]
    },
  ];

  return (
    <section id="price" ref={sectionRef} className="relative py-16 sm:py-2 leading-relaxed tracking-wider pt-4 lg:pt-24 scroll-mt-20">
        <FadeIn>
        <div className="text-center">
          <CurrencyCircleDollar
            weight="light"
            size={36} // スマホサイズ
            className="color-text sm:hidden mx-auto mb-1" // sm未満で表示
          />
          <CurrencyCircleDollar
            weight="light"
            size={48} // PCサイズ
            className="color-text hidden sm:block mx-auto mb-1" // sm以上で表示
          />
          <h2 className="text-[24px] lg:text-[40px] heading color-text relative inline-block mb-6 lg:mb-16">
            料金表
          </h2>
        </div>
      </FadeIn>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className={`grid items-stretch gap-10 ${prices.length === 1 ? 'lg:grid-cols-1 lg:justify-center' : 'lg:grid-cols-2'}`} style={prices.length === 1 ? {justifyItems: 'center'} : {}}>
          {prices.map((item, index) => (
            <div key={item.category} className={`${prices.length === 1 ? 'w-full' : ''} h-full bg-white border border-gray-200 rounded-lg shadow-custom`}>
              <PriceCard item={item} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-4">
          <ul className="text-xs lg:text-sm text-gray-600 mb-8 space-y-1 list-none">
            <li>※ 料金は全て税込表示です。</li>
            <li>※ 施術内容や時間によって料金が変動する場合があります。</li>
            <li>※ 初回限定価格は初めての方のみ対象です。</li>
            <li>※ 交通事故の施術は、健康保険・自賠責保険・労災保険が使用できます。詳しくは
              <Link href="/contact" className="underline">お問い合わせ</Link>
              ください。
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;