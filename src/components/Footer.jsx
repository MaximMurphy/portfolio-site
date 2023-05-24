export default function Footer() {
  return (
    <nav className="flex flex-col items-center justify-between ">
      <div className="w-full flex flex-row justify-between mb-12 px-10 lg:px-24 tracking-wider text-blue-950">
        <p className="font-semibold text-sm lg:text-base mt-2">✧</p>
        <div className="text-center italic font-serif text-sm font-base">
          <p>
            Maxim Murphy 2023 <span className="text-[0.6rem]">©</span>
          </p>
          <p>All rights reserved.</p>
        </div>
        <p className="font-semibold text-sm lg:text-base mt-2">✧</p>
      </div>
    </nav>
  );
}
