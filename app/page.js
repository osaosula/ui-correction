import Image from "next/image";
import Header from "./_components/Header";
import MainContainer from "./_components/MainContainer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f4f1ff] to-white">
      <Header />
      <MainContainer />
    </div>
  );
}
