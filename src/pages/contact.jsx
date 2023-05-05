export default function Contact() {
  return (
    <section className="bg-gradient-to-b from-softblue-400 via-softblue-600 to-softblue-800 w-full flex flex-col px-12 lg:px-48 mt-12 lg:mt-0 gap-12 lg:gap-24 pb-24">
      <h1 className="text-7xl lg:text-9xl font-bold text-end">Contact</h1>
      <p className="text-3xl lg:text-5xl w-full flex flex-col items-start font-bold text-white tracking-widest gap-4">
        If you would like to discuss a new project, please get in touch.
      </p>
      <p className="text-lg lg:text-3xl w-full flex flex-col items-center font-bold text-white tracking-widest gap-4">
        maxim.murphy8@gmail.com
      </p>

      <form className="z-40 w-full h-full bg-white/10 rounded-xl backdrop-blur-sm border-solid border border-white/10 shadow-xl flex flex-col items-start justify-center text-white font-bold p-12 lg:p-16">
        <label htmlFor="name" className="mb-4">
          {" "}
          Your Name
        </label>
        <input
          type="text"
          autoComplete="family-name"
          required
          name="name"
          className="w-full h-12 rounded-md focus:outline-none focus:ring-2  ring-orange-400 text-blue-950 p-4 mb-12"
        />
        <label htmlFor="email" className="mb-4">
          Email
        </label>
        <input
          type="email"
          autoComplete="email"
          required
          name="email"
          className="w-full h-12 rounded-md focus:outline-none focus:ring-2 ring-orange-400 text-blue-950 p-4 mb-12"
        />
        <label htmlFor="email" className="mb-4">
          Message
        </label>
        <textarea
          type="text"
          rows="6"
          className="w-full h-36 flex items-start rounded-md focus:outline-none focus:ring-2  ring-orange-400 text-blue-950 p-4 mb-12"
          name="message"
        />
        <button
          type="submit"
          className="bg-orange-600 rounded-md w-fit h-fit p-4"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
