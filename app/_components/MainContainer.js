import { Inter } from "next/font/google";
import CTAButton from "./CTAButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});
export default function MainContainer() {
  return (
    <main className="flex justify-center items-center h-[85vh] w-[95vw] bg-black text-white rounded-[30px] mx-auto">
      <div className="text-center">
        <h1
          className={`text-[45px] ${inter.className} inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#B3AEF5] via-[#D8CCE8] to-[#EBA97A] `}
        >
          Welcome to Axben
        </h1>

        <h2 className={`text-[15px] text-[#FFFFFF] ${inter.className}`}>
          Go Beyond Limits with Advanced Yet Simplified Trading.
        </h2>
        <div className="mt-6">
          <CTAButton />
          <p className={`mt-2 text-xs text-gray-400 ${inter.className}`}>
            Forever Free
          </p>
        </div>
      </div>
    </main>
  );
}
