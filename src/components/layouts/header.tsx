"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE_NAME, TEL, HOURS, HOLIDAY, FACEBOOK_LINK, INSTAGRAM_LINK, TWITTER_LINK, POST_CODE, ADDRESS } from "@/constants/site-info";
import { List, X, NotePencil, InstagramLogo, FacebookLogo, TwitterLogo } from "@phosphor-icons/react";

const navItems = [
  { name: "トップページ", href: "/" },
  { name: "症状別のお悩み", href: "/menu" },
  { name: "料金表", href: "/menu#price" },
  { name: "店舗情報・アクセス", href: "/#access" },
  { name: "お知らせ", href: "/news" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // スクロール検出
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled && "shadow-sm bg-white"
    )}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/" className="block">
              <h1 className="heading color-text font-semibold">
                {SITE_NAME}
              </h1>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-6">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                    href={item.href}
                    className="heading color-text hover:opacity-60 transition-all duration-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <div className="sm:flex sm:gap-4">
                <Link
                  href="/contact"
                  className="heading flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium color-accent hover:opacity-60 transition-all duration-400   border color-accent-border"
                >
                  <NotePencil size={16} weight="bold" />お問い合わせ
                </Link>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <List size={20} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* オーバーレイ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* モバイルメニュー */}
      <div
        className={cn(
          "fixed top-0 right-0 w-3/4 h-full z-50 bg-white transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="block">
            <p className="heading color-text">
              {SITE_NAME}
            </p>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-sm pt-2 pl-2 pb-2 color-text"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        <nav className="px-4 py-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="heading w-full text-left color-text hover:opacity-60 transition-all duration-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-start">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="heading inline-flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium color-accent hover:opacity-60 transition-all duration-400  border color-accent-border"
            >
              <NotePencil size={16} weight="bold" />お問い合わせ
            </Link>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 mt-6 color-text">
            <div className="heading text-xl font-semibold mb-2">{SITE_NAME}</div>
            <div className="text-xs tracking-wide text-gray-500 uppercase mb-1">お電話はこちら</div>
            <a href={`tel:${TEL}`} className="block text-2xl font-medium text-gray-900 hover:opacity-60 transition-all duration-400 tracking-wider mb-2">{TEL}</a>
            <div className="text-sm mb-1">
              <span className="font-medium whitespace-nowrap">住所　{POST_CODE}</span><br />
              <span className="pl-[3em] block">{ADDRESS}</span>
            </div>
            <ul className="space-y-1 text-sm mb-4">
              <li>施術時間　{HOURS}</li>
              <li>定休日　{HOLIDAY}</li>
            </ul>
            <ul className="flex gap-6 color-text-sub">
              <li>
                <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-all duration-400">
                  <span className="sr-only">Facebook</span>
                  <FacebookLogo size={24} weight="light" />
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-all duration-400">
                  <span className="sr-only">Instagram</span>
                  <InstagramLogo size={24} weight="light" />
                </a>
              </li>
              <li>
                <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-all duration-400">
                  <span className="sr-only">Twitter</span>
                  <TwitterLogo size={24} weight="light" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
