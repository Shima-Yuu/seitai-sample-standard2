"use client";

import { useState, useEffect } from "react";

const themes = [
  { name: "ピンク", value: "pink", color: "#e75480" },
  { name: "イエロー", value: "yellow", color: "#14b8a6" },
  { name: "グリーン", value: "green", color: "#4aa2a2" },
  { name: "ブルー", value: "blue", color: "#5fa6d4" },
];

export default function ThemeSelector() {
  const [theme, setTheme] = useState("pink");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="fixed left-3 bottom-3 z-[9999] flex flex-col items-center gap-2 p-2 bg-white/80 rounded-xl shadow-custom backdrop-blur-sm">
      {themes.map(t => (
        <button
          key={t.value}
          aria-label={t.name + "テーマ"}
          className={
            `w-7 h-7 rounded-full border-2 shadow-custom transition ` +
            (theme === t.value ? "border-black scale-110" : "border-white opacity-70 hover:scale-110")
          }
          style={{ backgroundColor: t.color }}
          onClick={() => setTheme(t.value)}
        />
      ))}
    </div>
  );
} 