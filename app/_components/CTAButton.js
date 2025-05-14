import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400",
});

export default function CTAButton() {
  return (
    <div className="relative w-[166px] h-[45px] flex items-center justify-center m-auto">
      {/* Central Button */}
      <button
        className={`relative z-10 w-[166px] h-[45px] backdrop-blur-[50px] rounded-[30px] fill-[#000000] opacity-50 text-[#FFFFFF] ${inter.className}`}
      >
        Try Demo
      </button>

      {/* Animated Balls */}
      <div className="ball top-1/3 left-1/8 bg-[#D9D9D9] w-[25px] h-[25px] animate-ball1" />
      <div className="ball top-0 right-1/6 bg-[#B3AEF5] w-[35] h-[35] animate-ball2" />
      <div className="ball bottom-1/2 left-1/5 bg-[#B3AEF5] w-[30] h-[30] animate-ball3" />
      <div className="ball bottom-0 right-1/4 bg-[#F7BCE9] w-[54] h-[33] animate-ball4" />
      <div className="ball top-0 left-1/2 -translate-x-1/2 bg-[#D7CBE7] w-[30] h-[30] animate-ball5" />
      <div className="ball bottom-0 left-1/3 -translate-x-1/2 bg-[#EAA879] w-[30] h-[30] animate-ball6" />
    </div>
  );
}
