"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
  "/top/mv1-pc.jpg",
  "/top/mv2-pc.jpg",
  "/top/mv3-pc.jpg",
]

export default function SimpleImageSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative flex-1 aspect-video md:aspect-[5/4] lg:aspect-[5/4] overflow-hidden rounded-2xl lg:rounded-l-4xl 2xl:rounded-l-[70px]  md:rounded-r-none lg:rounded-r-none">
      <div
        className="hero-section absolute inset-0 z-20 pointer-events-none"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          pointerEvents: "none",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0.5) 100%)",
          width: "100%",
          height: "100%",
          borderRadius: "1rem"
        }}
      ></div>
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          fill
          sizes="100vw"
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out absolute inset-0 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  )
}
