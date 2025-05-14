export default function SignInButton() {
  return (
    <div className="relative inline-flex items-center justify-center w-48 h-16">
      <div className="absolute w-[30px] h-[30px] top-1/3 left-1/3 bg-[#E5C8C8] rounded-[500px] animate-ball1 z-0" />

      <div className="absolute w-[30px] h-[30px] bottom-1/3 right-1/3 bg-[#F7BCE9] rounded-[500px] animate-ball2 -z-0" />

      <button className="relative z-10  W-[99] H-[45] text-black opacity-50 bg-[#FFFFFF] rounded-[30px] backdrop-blur-[10PX]">
        Sign In
      </button>
    </div>
  );
}
