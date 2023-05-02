import LegoModel from "@/components/LegoModel";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen w-full flex flex-col content-center text-center text-blue-950 text-3xl font-bold tracking-wider p-12 gap-24">
        <LegoModel />
        <h1> I'm a full stack web developer </h1>
      </div>
      <div className="min-h-screen w-full flex flex-col content-center text-center text-softblue-400 text-2xl font-bold tracking-wider p-12 py-36 bg-blue-950 gap-24">
        <h1>Main Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </main>
  );
}
