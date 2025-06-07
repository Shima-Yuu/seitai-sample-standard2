"use client";
import React, { useEffect, useState } from "react";

const BgPattern = () => {
  const [isSp, setIsSp] = useState(false);
  const [aspect, setAspect] = useState("xMidYMin slice");

  useEffect(() => {
    const handleResize = () => {
      setIsSp(window.innerWidth <= 900);
      setAspect(window.innerWidth <= 1300 ? "xMinYMid slice" : "xMidYMin slice");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isSp) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="750"
        height="1024"
        preserveAspectRatio="xMidYMin slice"
        viewBox="0 0 750 1024"
        className="bg-pattern"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          pointerEvents: "none",
          objectFit: "cover",
        }}
      >
        <g mask="url(#SvgjsMask1123)" fill="none">
          <path d="M170.683,369.216C237.714,366.585,288.02,315.885,322.008,258.05C356.581,199.22,377.67,129.821,347.27,68.73C313.748,1.365,245.909,-47.722,170.683,-46.051C97.746,-44.431,42.202,12.285,7.177,76.283C-26.229,137.323,-36.636,210.039,-2.722,270.798C31.996,332.999,99.504,372.01,170.683,369.216" className="triangle-float3"></path>
          <path d="M-89.95 -10.04 a79.91 79.91 0 1 0 159.82 0 a79.91 79.91 0 1 0 -159.82 0z" className="triangle-float2"></path>
          <path d="M-163.2 63.2 a226.4 226.4 0 1 0 452.8 0 a226.4 226.4 0 1 0 -452.8 0z" className="triangle-float2"></path>
          <path d="M666.891,181.285C706.542,183.997,742.722,156.462,760.251,120.793C776.059,88.626,764.064,52.163,745.379,21.577C727.676,-7.401,700.816,-30.55,666.891,-32.029C630.366,-33.621,592.459,-18.257,575.583,14.175C559.613,44.865,576.723,79.013,593.311,109.373C610.936,141.629,630.22,178.777,666.891,181.285" className="triangle-float2"></path>
          <path d="M535.03 -35.02 a29.95 29.95 0 1 0 59.9 0 a29.95 29.95 0 1 0 -59.9 0z" className="triangle-float3"></path>
          <path d="M526.08 -26.08 a47.84 47.84 0 1 0 95.68 0 a47.84 47.84 0 1 0 -95.68 0z" className="triangle-float3"></path>
          <path d="M-168.02 942.02 a236.04 236.04 0 1 0 472.08 0 a236.04 236.04 0 1 0 -472.08 0z" className="triangle-float1"></path>
          <path d="M-165.24 939.24 a230.48 230.48 0 1 0 460.96 0 a230.48 230.48 0 1 0 -460.96 0z" className="triangle-float1"></path>
          <path d="M-77.68 851.68 a55.36 55.36 0 1 0 110.72 0 a55.36 55.36 0 1 0 -110.72 0z" className="triangle-float2"></path>
          <path d="M456.35 917.65 a187.3 187.3 0 1 0 374.6 0 a187.3 187.3 0 1 0 -374.6 0z" className="triangle-float2"></path>
          <path d="M780.912,1224.217C850.203,1223.098,927.61,1219.586,964.204,1160.736C1002.228,1099.587,981.537,1022.225,945.151,960.088C909.225,898.737,851.931,851.03,780.912,847.721C704.005,844.138,627.808,877.639,587.837,943.44C546.403,1011.65,541.853,1101.063,587.073,1166.824C627.996,1226.336,708.697,1225.383,780.912,1224.217" className="triangle-float3"></path>
          <path d="M476.25 897.76 a147.51 147.51 0 1 0 295.02 0 a147.51 147.51 0 1 0 -295.02 0z" className="triangle-float2"></path>
        </g>
        <defs>
          <mask id="SvgjsMask1123">
            <rect width="750" height="1024" fill="#ffffff"></rect>
          </mask>
          <style>{`
            @keyframes float1 {
              0%{transform: translate(0, 0)}
              50%{transform: translate(-10px, 0)}
              100%{transform: translate(0, 0)}
            }
            .triangle-float1 {
              animation: float1 5s infinite;
            }
            @keyframes float2 {
              0%{transform: translate(0, 0)}
              50%{transform: translate(-5px, -5px)}
              100%{transform: translate(0, 0)}
            }
            .triangle-float2 {
              animation: float2 4s infinite;
            }
            @keyframes float3 {
              0%{transform: translate(0, 0)}
              50%{transform: translate(0, -10px)}
              100%{transform: translate(0, 0)}
            }
            .triangle-float3 {
              animation: float3 6s infinite;
            }
          `}</style>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="1920"
      height="1080"
      preserveAspectRatio={aspect}
      viewBox="0 0 1920 1080"
      className="bg-pattern"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        objectFit: "cover",
      }}
    >
      <g mask="url(#SvgjsMask1151)" fill="none">
        <path d="M-242.91 98.91 a341.82 341.82 0 1 0 683.64 0 a341.82 341.82 0 1 0 -683.64 0z" className="triangle-float3"></path>
        <path d="M-233.25 89.25 a322.5 322.5 0 1 0 645 0 a322.5 322.5 0 1 0 -645 0z" className="triangle-float2"></path>
        <path d="M-91.98 -52.01 a39.97 39.97 0 1 0 79.94 0 a39.97 39.97 0 1 0 -79.94 0z" className="triangle-float3"></path>
        <path d="M1462.08 97.91 a339.83 339.83 0 1 0 679.66 0 a339.83 339.83 0 1 0 -679.66 0z" className="triangle-float2"></path>
        <path d="M1570.17 -10.17 a123.66 123.66 0 1 0 247.32 0 a123.66 123.66 0 1 0 -247.32 0z" className="triangle-float2"></path>
        <path d="M1570.86 -10.86 a122.28 122.28 0 1 0 244.56 0 a122.28 122.28 0 1 0 -244.56 0z" className="triangle-float3"></path>
        <path d="M-133.35 853.35 a122.7 122.7 0 1 0 245.4 0 a122.7 122.7 0 1 0 -245.4 0z" className="triangle-float3"></path>
        <path d="M176.37,1248.922C250.825,1249.158,322.215,1210.472,356.723,1144.497C389.15,1082.499,364.943,1012.209,332.641,950.146C296.664,881.021,254.293,798.728,176.37,797.974C97.821,797.214,50.815,877.275,14.768,947.069C-17.53,1009.604,-35.231,1081.308,-2.012,1143.358C32.94,1208.644,102.317,1248.687,176.37,1248.922" className="triangle-float3"></path>
        <path d="M192.072,1267.142C266.134,1265.149,332.457,1222.659,368.287,1157.81C402.957,1095.06,397.324,1020.315,363.316,957.204C327.244,890.263,268.078,833.138,192.072,830.799C112.553,828.352,41.155,877.076,1.545,946.071C-37.891,1014.764,-41.799,1099.641,-1.377,1167.759C38.275,1234.579,114.401,1269.233,192.072,1267.142" className="triangle-float3"></path>
        <path d="M1928.328,1381.086C2025.756,1384.931,2101.775,1300.581,2142.574,1212.023C2177.226,1136.808,2150.509,1055.595,2112.078,982.24C2069.529,901.025,2019.836,808.803,1928.328,803.085C1830.237,796.955,1742.162,867.721,1699.974,956.488C1662.666,1034.987,1700.331,1119.649,1741.498,1196.195C1785.978,1278.9,1834.494,1377.383,1928.328,1381.086" className="triangle-float3"></path>
        <path d="M1883.767,1243.823C1957.247,1245.6,2030.899,1213.57,2066.477,1149.254C2101.129,1086.612,2080.411,1012.863,2046.361,949.893C2010.062,882.764,1960.036,814.019,1883.767,811.361C1804.199,808.588,1736.456,866.908,1700.281,937.831C1667.242,1002.606,1678.355,1078.409,1715.75,1140.771C1751.964,1201.163,1813.37,1242.12,1883.767,1243.823" className="triangle-float3"></path>
        <path d="M1577.44 846.56 a109.12 109.12 0 1 0 218.24 0 a109.12 109.12 0 1 0 -218.24 0z" className="triangle-float2"></path>
      </g>
      <defs>
        <mask id="SvgjsMask1151">
          <rect width="1920" height="1080" fill="#ffffff"></rect>
        </mask>
        <style>{`
          @keyframes float1 {
            0%{transform: translate(0, 0)}
            50%{transform: translate(-10px, 0)}
            100%{transform: translate(0, 0)}
          }
          .triangle-float1 {
            animation: float1 5s infinite;
          }
          @keyframes float2 {
            0%{transform: translate(0, 0)}
            50%{transform: translate(-5px, -5px)}
            100%{transform: translate(0, 0)}
          }
          .triangle-float2 {
            animation: float2 4s infinite;
          }
          @keyframes float3 {
            0%{transform: translate(0, 0)}
            50%{transform: translate(0, -10px)}
            100%{transform: translate(0, 0)}
          }
          .triangle-float3 {
            animation: float3 6s infinite;
          }
        `}</style>
      </defs>
    </svg>
  );
};

export default BgPattern; 