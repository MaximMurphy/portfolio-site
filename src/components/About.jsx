export default function About() {
  return (
    <section className="h-full w-full flex flex-col lg:flex-row items-center justify-center p-12">
      <div className="flex flex-col items-center font-semibold tracking-wider gap-12 p-4">
        <div>
          <h1 className="text-7xl lg:text-[10rem] italic font-serif">
            <span className="text-blue-950">M</span>
            <span className="text-cyan-950 lg:-ml-1">A</span>
            <span className="text-blue-950">X</span>
            <span className="text-cyan-950 lg:-ml-3">I</span>
            <span className="text-blue-950 lg:-ml-3">M</span>
          </h1>
          <h1 className="text-7xl lg:text-[10rem] italic font-serif ml-4 lg:ml-12">
            <span className="text-blue-950">M</span>
            <span className="text-cyan-950 lg:-ml-3">U</span>
            <span className="text-blue-950 lg:-ml-2">R</span>
            <span className="text-cyan-950 lg:-ml-1">P</span>
            <span className="text-blue-950 lg:-ml-3">H</span>
            <span className="text-cyan-950 lg:-ml-1">Y</span>
          </h1>
        </div>

        <div className="text-3xl lg:text-5xl text-cyan-800 w-80 lg:w-[30rem]">
          <div className="flex flex-row justify-between">
            <p>CREATIVE</p>
            <p>WEB</p>
          </div>
          <p>DEVELOPER</p>
          <div className="flex flex-row justify-between">
            <p>&</p>
            <p>DESIGNER</p>
          </div>
        </div>

        <h1 className="text-3xl lg:text-5xl">👨‍💻⚡️🌐</h1>
      </div>
    </section>
  );
}
