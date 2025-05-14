import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.jpg";
import { Inter } from "next/font/google";
import SignInButton from "./SignInButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});
export default function Header() {
  return (
    <nav
      className={`w-full h-[71px] flex justify-between items-center p-4 ${inter.className}`}
    >
      <div className="flex items-center gap-2">
        <Image src={logo} alt="Axben Logo" width={43} height={40} />
        <span>Axben</span>
      </div>
      <nav className="space-x-6">
        <Link href="#">Home</Link>
        <Link href="#">Trade</Link>
        <Link href="#">Dashboard</Link>
        <Link href="#">Calender</Link>
      </nav>
      <SignInButton />
    </nav>
  );
}
